import asyncio
from playwright import async_api

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",         # Set the browser window size
                "--disable-dev-shm-usage",        # Avoid using /dev/shm which can cause issues in containers
                "--ipc=host",                     # Use host-level IPC for better stability
                "--single-process"                # Run the browser in a single process mode
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        context.set_default_timeout(5000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Navigate to your target URL and wait until the network request is committed
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)

        # Wait for the main page to reach DOMContentLoaded state (optional for stability)
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=3000)
        except async_api.Error:
            pass

        # Iterate through all iframes and wait for them to load as well
        for frame in page.frames:
            try:
                await frame.wait_for_load_state("domcontentloaded", timeout=3000)
            except async_api.Error:
                pass

        # Interact with the page elements to simulate user flow
        # -> Navigate to http://localhost:3000
        await page.goto("http://localhost:3000", wait_until="commit", timeout=10000)
        
        # -> Click the 'Projetos' navigation link (element index 10) to go to the projects section/page
        frame = context.pages[-1]
        # Click element
        elem = frame.locator('xpath=html/body/div/header/div/nav/a[2]').nth(0)
        await page.wait_for_timeout(3000); await elem.click(timeout=5000)
        
        # --> Assertions to verify final state
        frame = context.pages[-1]
        # -> Assert that a project card is visible near the top of the projects list
        card_top = page.locator("text=Restaurante Sabor & Arte")
        assert await card_top.is_visible(), "Expected project card 'Restaurante Sabor & Arte' to be visible"
        
        # -> Quickly scroll to bottom of the projects list
        await page.evaluate("window.scrollTo({top: document.body.scrollHeight, behavior: 'instant'})")
        await page.wait_for_timeout(500)
        
        # -> Assert that a project card is visible after quick scroll
        card_bottom = page.locator("text=Lampião Burguer")
        assert await card_bottom.is_visible(), "Expected project card 'Lampião Burguer' to be visible after fast scroll"
        
        # -> Quickly scroll back to top
        await page.evaluate("window.scrollTo({top: 0, behavior: 'instant'})")
        await page.wait_for_timeout(500)
        
        # -> Assert that the section heading is visible at the top
        heading = page.locator("text=Meus Projetos")
        assert await heading.is_visible(), "Expected heading 'Meus Projetos' to be visible after scrolling back to top"
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    