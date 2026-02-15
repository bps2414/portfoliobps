# UX Improvements Plan

## Goal Description
Fix usability issues in the Project Details modal and enhance the Contact Form.
1.  **Project Details:** Ensure full-page screenshots are scrollable (instead of being contained/shrunk) and optimize their loading.
2.  **Contact Form:** Add a field for "Nome do Restaurante" and include it in the WhatsApp message.

## User Review Required
> [!IMPORTANT]
> **Image Scaling Strategy:**
> To allow scrolling, we will switch from `object-fit: contain` (which fits the whole image in the screen) to a **scrollable vertical layout**. The image will render at 100% width and its natural height, causing the container to overflow and scroll. This is better for "full page" screenshots.

## Proposed Changes

### Frontend (UI/UX)

#### [MODIFY] [src/app/projects/page.tsx](file:///f:/VSCode/portfolio%20stitch/nexo-portfolio/src/app/projects/page.tsx)
-   **Image Container:**
    -   Remove `flex items-center justify-center` from the image wrapper to allow content to flow.
    -   Change `Image` component usage:
        -   Remove `fill` prop.
        -   Use `width={1920}` and `height={1080}` (intrinsic values) with `w-full h-auto` class to ensure it scales responsively but maintains aspect ratio and height.
        -   This forces the scrollbar to appear for tall images.
-   **Loading Optimization:**
    -   Ensure `priority` is kept.
    -   Add `placeholder="blur"` if blur data is available, or at least a skeleton loader state (can be simulated with a background color while loading).

#### [MODIFY] [src/app/contact/page.tsx](file:///f:/VSCode/portfolio%20stitch/nexo-portfolio/src/app/contact/page.tsx)
-   **Form Fields:**
    -   Add a new `<input>` for "Nome do Restaurante" after the Name field.
-   **Logic:**
    -   Update `handleSubmit` to capture the new field value.
    -   Update the WhatsApp message string template to include: `Olá, meu nome é ${name} do restaurante ${restaurantName}...`.

## Verification Plan

### Automated Tests
-   Since these are mainly visual and interaction changes, and we lack a full E2E suite for this specific generic portfolio (it seems to be a template), we will rely on manual verification and unit tests if applicable.
-   We can run `npm run lint` to ensure no accessibility or type errors are introduced.

### Manual Verification
1.  **Project Details:**
    -   Open a project (e.g., "Restaurante Sabor & Arte").
    -   Verify the image appears at full width.
    -   Verify you can scroll down to see the bottom of the image.
    -   Verify the image loads reasonably fast (or shows a loader).
2.  **Contact Form:**
    -   Navigate to `/contact`.
    -   Fill in Name, **Restaurant Name**, Email, Message.
    -   Click "Enviar".
    -   Verify the new tab (WhatsApp) allows sending a message that includes the restaurant name.
