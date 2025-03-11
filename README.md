<!-- Custom Table Properties -->

# Custom Table Properties

## key

- Type: string
- Unique identifier for the column, used to bind data.

## title

- Type: string (optional)
- Optional title displayed as the column header.

## order

- Type: number (optional)
- Defines the display order of the columns.

## type

- Type: 'text' | 'image' | 'video' | 'multi' (optional)
- Specifies the content type in the column (text, image, video, or multiple).

## minWidth

- Type: string (optional)
- Minimum width of the column.

## maxWidth

- Type: string (optional)
- Maximum width of the column.

## alignment

- Type: 'left' | 'center' | 'right' | 'top' | 'bottom' (optional)
- Sets the content alignment within the column (left, center, right, top, or bottom).

# Table Config Properties

## isHeader

- Type: boolean
- Determines if the table's header should be displayed.

## columns

- Type: TableColumn[]
- List of column configurations defined by the TableColumn interface.

## tableTitle

- Type: string (optional)
- Title displayed for the table.

## currentPage

- Type: number
- The current page being displayed in the table.

## itemsPerPage

- Type: number
- Number of items displayed per page.

## maxItemsOptions

- Type: number[]
- Array of options for the maximum number of items per page.

## buttons

- Type: { [key: string]: () => void } (optional)
- Object that defines custom actions triggered by specific buttons.

## editableColumns

- Type: string[] (optional)
- List of columns that are editable in the table.

## actions

- Type: ButtonConfig[]
- Array of ButtonConfig objects to define actions like Edit, Delete, etc.

## rowHeight

- Type: string (optional)
- Custom height of each row in the table.

## maxRowHeight

- Type: string (optional)
- Maximum height allowed for each row.

## margin

- Type: string (optional)
- Space between the table and its surroundings.

## elementSpacing

- Type: string (optional)
- Space between elements inside a table cell (e.g., buttons).

## columnAlignments

- Type: any (optional)
- Custom alignment configurations for columns.

## filterWidth

- Type: string (optional)
- Width of the filter input field.

## filterAlignment

- Type: 'left' | 'center' | 'right' (optional)
- Alignment of the filter input (left, center, right).

## showFilter

- Type: boolean
- Controls the visibility of the filter input.

# Button Config Properties

## id

- Type: string (optional)
- Unique identifier for the button.

## text

- Type: string (optional)
- Text label to be displayed on the button.

## icon

- Type: string (optional)
- Icon name to be displayed on the button.

## group

- Type: 'left' | 'right' (optional)
- Button group alignment (left or right).

## align

- Type: 'left' | 'center' | 'right' (optional)
- Alignment of the button within its container.

## showIcon

- Type: boolean (optional)
- Controls whether the icon should be visible.

## iconPosition

- Type: 'left' | 'center' | 'right' | 'full' | 'top' | 'bottom' (optional)
- Defines the position of the icon relative to the text.

## shape

- Type: 'circle' | 'square' | 'rectangle' (optional)
- Defines the button shape.

## corners

- Type: 'rounded' | 'squared' (optional)
- Determines whether the button has rounded or squared corners.

## transparent

- Type: boolean (optional)
- Indicates if the button background should be transparent.

## width

- Type: string (optional)
- Width of the button.

## backgroundColor

- Type: string (optional)
- Sets the button's background color.

## foregroundColor

- Type: string (optional)
- Sets the text or icon color.

## borderColor

- Type: string (optional)
- Sets the button's border color.

## hasBorder

- Type: boolean
- Controls whether the button has a border.

## shadow

- Type: boolean (optional)
- Specifies if a shadow should be applied to the button.

## navigate

- Type: boolean (optional)
- Indicates if clicking the button should navigate to a URL.

## action

- Type: () => void (optional)
- Function to be executed when the button is clicked.

## url

- Type: string (optional)
- URL to navigate to when button is clicked (if navigate is true).

## onClick

- Type: (row: any) => void (optional)
- Function to be executed when the button is clicked, receiving the current row data.

## validate

- Type: () => boolean (optional)
- Function to validate the button's state before action.

## textAlign

- Type: 'left' | 'center' | 'right' (optional)
- Defines the alignment of the button text.

## menuItems

- Type: ButtonConfig[] (optional)
- Array of button configurations for dropdown menu items.

## isMenuButton

- Type: boolean (optional)
- Indicates if the button displays a dropdown menu.

## class

- Type: string (optional)
- Additional CSS class names to apply to the button.

## isPillButton

- Type: boolean (optional)
- Indicates if the button should be styled as a pill (fully rounded rectangle).

## customStyles

- Type: { [key: string]: string } (optional)
- Object containing custom CSS styles to apply to the button.

# Card Component Properties

The card component system supports both individual cards and collections (grid/list layouts). Here's a complete guide to configuring cards using the available properties.

## Card Collection Configurations

### CardGridConfig

A configuration for displaying multiple cards in a grid layout.

#### gridTitle

- Type: string (optional)
- Title displayed above the grid of cards.

#### gridTitleTag

- Type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' (optional)
- HTML tag used for the grid title.

#### gridTitleStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the grid title.

#### gridSubtitle

- Type: string (optional)
- Subtitle displayed below the grid title.

#### gridSubtitleTag

- Type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' (optional)
- HTML tag used for the grid subtitle.

#### gridSubtitleStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the grid subtitle.

#### layoutType

- Type: 'grid'
- Specifies that this configuration is for a grid layout.

#### gridContainerStyle

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the grid container.

#### cardConfigs

- Type: CardConfig[]
- Array of card configurations to be displayed in the grid.

### CardListConfig

A configuration for displaying multiple cards in a list layout.

#### listTitle

- Type: string (optional)
- Title displayed above the list of cards.

#### listTitleTag

- Type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' (optional)
- HTML tag used for the list title.

#### listTitleStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the list title.

#### listSubtitle

- Type: string (optional)
- Subtitle displayed below the list title.

#### listSubtitleTag

- Type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' (optional)
- HTML tag used for the list subtitle.

#### listSubtitleStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the list subtitle.

#### layoutType

- Type: 'list'
- Specifies that this configuration is for a list layout.

#### listContainerStyle

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the list container.

#### cardConfigs

- Type: CardConfig[]
- Array of card configurations to be displayed in the list.

## Individual Card Configuration (CardConfig)

### dynamicComponents

- Type: DynamicComponentConfig[] (optional)
- Array of dynamic components to be rendered within the card.

### iframeUrl

- Type: string (optional)
- URL to be loaded in an iframe within the card.

### iframeHeight

- Type: string (optional)
- Height of the iframe within the card.

### iframeWidth

- Type: string (optional)
- Width of the iframe within the card.

### layout

- Type: 'grid' | 'list' (optional)
- Layout style of the individual card.

### width

- Type: number (optional)
- Width of the card.

### imageAlignment

- Type: 'left' | 'right' (optional)
- Alignment of images within the card.

### sectionWidths

- Type: [number, number] (optional)
- Widths of different sections within the card.

### hasBorder

- Type: boolean (optional)
- Whether the card has a border.

### customStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the card.

### hoverStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the card on hover.

### cardActions

- Type: { icon: string; text: string; }[] (optional)
- Array of action items (with icons and text) displayed in the card.

### header

Card header configuration containing title, description, buttons, and icons.

#### header.headerStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the header section.

#### header.title

- Type: string
- Title text displayed in the card's header.

#### header.titleTag

- Type: 'h1' | 'h2' | 'h3' | 'h4' | 'p' (optional)
- HTML tag used for the title.

#### header.titleStyles

- Type: { [key: string]: string } (optional)
- Custom CSS styles applied to the title.

#### header.titleAlign

- Type: 'left' | 'center' | 'right' (optional)
- Alignment of the title within the header.

#### header.description

- Type: Array of description objects (optional)
- Array of description elements to be displayed in the header.
  - **descriptionText**: Text content for the description.
  - **descriptionTag**: HTML tag for the description ('h1' | 'h2' | 'h3' | 'h4' | 'p').
  - **descriptionStyles**: Custom CSS styles for the description.
  - **descriptionAlign**: Alignment of the description ('left' | 'center' | 'right').

#### header.buttonsAlign

- Type: 'left' | 'center' | 'right' (optional)
- Alignment of buttons within the header.

#### header.buttons

- Type: ButtonConfig[] (optional)
- Array of button configurations for the header.

#### header.icons

- Type: Array of icon objects (optional)
- Icons to be displayed in the header.
  - **icon**: Icon identifier string.
  - **iconStyles**: Custom CSS styles for the icon.
  - **iconPlacement**: Position of the icon ('left' | 'right' | 'top' | 'bottom').

### imagebackgroundShapes

- Type: Array of shape objects (optional)
- Background shapes to be displayed behind images.
  - **type**: Shape type ('rectangle' | 'oval' | 'circle' | 'square' | 'triangle' | 'hexagon' | 'pentagon').
  - **position**: Position of the shape ('top-left' | 'top-right' | 'bottom-left' | 'bottom-right').
  - **styles**: Custom CSS styles for the shape.

### listForegroundImages

- Type: Array of image objects (optional)
- Foreground images to be displayed in list layouts.
  - **src**: Image source URL.
  - **position**: Position of the image ('top-left' | 'top-right' | 'bottom-left' | 'bottom-right').
  - **img-class**: CSS class for the image.
  - **imgStyles**: Custom CSS styles for the image.

### image

- Type: Object (optional)
- Main image configuration for the card.
  - **position**: Position and style of the image ('background' | 'top-half' | 'middle' | 'bottom-half' | 'square-under-title' | 'rectangle-under-title' | 'dark-background-title').
  - **src**: Source URL of the image.
  - **hoverEffect**: Whether to apply hover effects to the image.
  - **title**: Optional title for the image.
  - **description**: Optional description for the image.

### body

- Type: Object (optional)
- Configuration for the card body.
  - **type**: Type of content in the body ('text' | 'text+buttons' | 'table').
  - **align**: Alignment of the content ('left' | 'center' | 'right').
  - **content**: Text content displayed in the body.
  - **buttons**: Array of button configurations for the body.

### content

- Type: Object (optional)
- Additional content configuration.
  - **description**: Additional descriptive text.
  - **customHtml**: Custom HTML content.
  - **details**: Structured detailed content.
    - **align**: Alignment of details ('left' | 'center' | 'right' | 'multi-column').
    - **columns**: Number of columns (1 | 2 | 3).
    - **rows**: Number of rows (1 | 2 | 3).
    - **content**: 2D array of content objects with text and icons.

### footer

- Type: Object (optional)
- Configuration for the card footer.
  - **type**: Type of footer content ('text' | 'buttons').
  - **buttons**: Array of button configurations for the footer.
  - **text**: Text content for the footer.
  - **align**: Alignment of the footer content ('left' | 'center' | 'right' | 'multi-column').

## DynamicComponentConfig

Configuration for dynamic components that can be inserted into cards.

### dynamicComponent

- Type: Type<any>
- Angular component type to be dynamically loaded.

### dynamicComponentConfig

- Type: { [key: string]: any } (optional)
- Configuration object passed to the dynamic component.

# User Properties

## id

- Type: number
- Unique identifier for the user.

## name

- Type: string
- Name of the user.

## email

- Type: string
- Email address of the user.

## role

- Type: string
- Role or designation of the user (e.g., Admin, User).

## imageUrl

- Type: string (optional)
- URL for the user's profile image.

## videoUrl

- Type: string (optional)
- URL for the user's profile video.

## actions

- Type: ButtonConfig[] (optional)
- Array of ButtonConfig objects for actions related to the user (e.g., Edit, Delete).

## contentItems

- Type: { [columnKey: string]: ColumnItem[] } (optional)
- Object containing content data for each column, where the key is the column's identifier, and the value is an array of ColumnItem objects.

## rowAlignments

- Type: { [key: string]: 'left' | 'center' | 'right' } (optional)
- Object defining custom alignment for each key in the row (e.g., left, center, right).

## imageLoading

- Type: boolean (optional)
- Flag indicating if the user's image is still loading.

## videoLoading

- Type: boolean (optional)
- Flag indicating if the user's video is still loading.

# Footer Properties

## FooterColumn Properties

### title?: string;

- An optional title displayed in the footer column.

### description?: string;

- Additional descriptive text for the footer column.

### buttonText?: string;

- The text displayed on a button in the footer column.

### buttonUrl?: string;

- The URL the button redirects to when clicked.

### lineText?: string;

- Optional text displayed as a line separator or under the column content.

### linkUrl?: string;

- A URL associated with the line text or a link in the footer column.

### iconButtons?: { icon: string; url: string }[];

- An array of icon buttons with the following properties:
  - **icon**: The icon displayed on the button.
  - **url**: The URL the button redirects to when clicked.

## FooterConfig Properties

### footerContainerstyle?: { [key: string]: string };

- A CSS-compatible object to style the footer container.

### isSubscribeShow: boolean;

- Determines whether the subscribe section is displayed.

### subscribeButton?: string;

- The text displayed on the subscribe button.

### subscribeDesc?: string;

- A description text for the subscribe section.

### subscribeText?: string;

- Placeholder text for the subscribe input field.

### contactusButton?: string;

- The text displayed on the contact us button.

### logoUrl: string;

- The URL of the logo displayed in the footer.

### description: string;

- A brief description displayed in the footer.

### usefulLinks: { name: string; url: string }[];

- An array of useful links with the following properties:
  - **name**: The text displayed for the link.
  - **url**: The destination URL for the link.

### contact:

- **address**: string; - The contact address displayed in the footer.
- **email**: string; - The contact email displayed in the footer.
- **phone**: string; - The contact phone number displayed in the footer.

### columns: FooterColumn[];

- An array of footer columns containing properties defined in `FooterColumn`.

### iframeUrl?: string;

- URL of an embedded iframe displayed in the footer.

### iframeWidth?: string;

- The width of the iframe, specified as a CSS-compatible value (e.g., `100%`, `500px`).

### iframeHeight?: string;

- The height of the iframe, specified as a CSS-compatible value.

### bottomBar?:

- **logoUrl?**: string; - The URL of the logo displayed in the bottom bar.
- **copyrightText?**: string; - The copyright text displayed in the bottom bar.
- **year?**: number; - The year displayed in the bottom bar.
- **company?**: string; - The name of the company displayed in the bottom bar.
- **backgroundColor?**: string; - The background color of the bottom bar, specified as a CSS-compatible value.
- **align?**: 'left' | 'center' | 'right';
  - **left**: Aligns content to the left.
  - **center**: Centers content.
  - **right**: Aligns content to the right.
- **margin?**: string;
  - Optional margin around the bottom bar, specified as a CSS-compatible value (e.g., `16px`, `1rem`).
- **icons?**: { icon: string; url: string }[];
  - An array of icons displayed in the bottom bar with the following properties:
    - **icon**: The icon displayed.
    - **url**: The URL the icon redirects to when clicked.

# Form Component

## Overview

This Angular form component provides a dynamic and configurable form system with validation, styling, and various field types. It supports multiple input types, validation rules, and customizable styling.

---

## Form Configuration

### FormConfig

- **formTitle**: (optional) `string` - The title of the form.
- **formTitleStyles**: (optional) `{ [key: string]: string }` - Custom CSS styles for the form title.
- **formSubTitle**: (optional) `string` - Subtitle of the form.
- **formSubTitleStyles**: (optional) `{ [key: string]: string }` - Custom CSS styles for the form subtitle.
- **isImageShow**: `boolean` - Determines if an image should be displayed in the form.
- **formWidth**: `number` - The width of the form.
- **fields**: `FormFieldConfig[]` - Array of form fields with configurations.
- **submitButtonConfig**: (optional) `ButtonConfig` - Configuration for the submit button.
- **cancelButtonConfig**: (optional) `ButtonConfig` - Configuration for the cancel button.
- **backgroundColor**: (optional) `string` - Background color of the form.

---

### FormFieldConfig

- **type**: `'text' | 'email' | 'number' | 'date' | 'file' | 'textarea' | 'time' | 'switch' | 'radio' | 'checkbox' | 'password' | 'color' | 'select'` - Specifies the type of the input field.
- **label**: `string` - The label displayed for the field.
- **key**: `string` - Unique identifier for the field.
- **placeholder**: (optional) `string` - Placeholder text for the input field.
- **showFileIcon**: (optional) `boolean` - Whether to show a file icon for file inputs.
- **width**: (optional) `number | string` - Width of the field in pixels or percentage.
- **value**: (optional) `any` - Default value for the field.
- **isPasswordVisible**: (optional) `boolean` - Determines if password fields should be visible.
- **required**: (optional) `boolean` - Whether the field is required.
- **validation**: (optional) `ValidationConfig` - Validation rules for the field.
- **fileConfig**: (optional) `FileConfig` - Configuration options for file inputs.
- **textareaConfig**: (optional) `TextAreaConfig` - Configuration options for textarea inputs.
- **style**: (optional) `StyleConfig` - Custom styles for the field.
- **errorMessages**: (optional) `ErrorMessagesConfig` - Custom error messages for validation.
- **hide**: (optional) `boolean` - Whether the field should be hidden.
- **disabled**: (optional) `boolean` - Whether the field should be disabled.
- **showCheckbox**: (optional) `boolean` - Whether to show a checkbox for field visibility control.
- **buttonConfig**: (optional) `ButtonConfig` - Configuration for buttons inside the form field.
- **options**: (optional) `OptionConfig[]` - List of selectable options (for dropdowns, radio, etc.).
- **defaultValue**: (optional) `any` - Default value assigned to the field.

---

### ToolbarOption

- **type**: `'bold' | 'italic' | 'underline' | 'strike' | 'color' | 'background' | 'blockquote' | 'code-block' | 'header' | 'list' | 'script' | 'indent' | 'direction' | 'size' | 'font' | 'align' | 'link' | 'image' | 'video' | 'clean'` - Type of toolbar formatting option.
- **value**: (optional) `string | number | string[] | boolean` - Configuration value for the toolbar option.

---

### OptionConfig

- **key**: `string` - Unique key for the option.
- **label**: `string` - Display label for the option.
- **value**: `string | number | boolean` - The value associated with the option.
- **status**: (optional) `'available' | 'booked'` - Indicates whether the option is available or booked.

---

## Field Types and Examples

### Text Field

```typescript
{
  type: 'text',
  label: 'First Name',
  key: 'firstName',
  placeholder: 'Enter your first name',
  required: true,
  validation: { minLength: 2, maxLength: 30 },
  errorMessages: {
    required: 'First name is required.',
    minLength: 'First name must be at least 2 characters long.',
    maxLength: 'First name cannot exceed 30 characters.',
  }
}
```

### Email Field

```typescript
{
  type: 'email',
  label: 'Email',
  key: 'email',
  placeholder: 'Enter your email',
  required: true,
  validation: { pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$' },
  errorMessages: {
    required: 'Email is required.',
    pattern: 'Enter a valid email address.',
  }
}
```

### Number Field

```typescript
{
  type: 'number',
  label: 'Phone',
  key: 'phone',
  placeholder: 'Enter your phone number',
  validation: { minLength: 10, maxLength: 15 },
  errorMessages: {
    minLength: 'Phone number must be at least 10 digits.',
    maxLength: 'Phone number cannot exceed 15 digits.',
  }
}
```

### Date Field

```typescript
{
  type: 'date',
  label: 'Date of Birth',
  key: 'dob',
  required: true,
  errorMessages: { required: 'Date of Birth is required.' }
}
```

### File Upload Field

```typescript
{
  type: 'file',
  label: 'Upload Document',
  key: 'document',
  fileConfig: { allowedExtensions: ['pdf', 'docx'], maxSize: 5 },
  errorMessages: {
    maxSize: 'File size should not exceed 5MB.',
    allowedExtensions: 'Only PDF and DOCX files are allowed.',
  }
}
```

### Password Field

```typescript
{
  type: 'password',
  label: 'Password',
  key: 'password',
  required: true,
  validation: { minLength: 8 },
  errorMessages: {
    required: 'Password is required.',
    minLength: 'Password must be at least 8 characters long.',
  }
}
```

### Color Picker

```typescript
{
  type: 'color',
  label: 'Choose Color',
  key: 'color',
  value: '#ff0000'
}
```

### Select Dropdown

```typescript
{
  type: 'select',
  label: 'Select Country',
  key: 'country',
  options: [
    { key: 'us', label: 'United States', value: 'US' },
    { key: 'in', label: 'India', value: 'IN' },
  ],
  required: true,
  errorMessages: { required: 'Please select a country.' }
}
```

### Radio Buttons

```typescript
{
  type: 'radio',
  label: 'Gender',
  key: 'gender',
  options: [
    { key: 'male', label: 'Male', value: 'male' },
    { key: 'female', label: 'Female', value: 'female' }
  ],
  required: true,
  errorMessages: { required: 'Please select your gender.' }
}
```

### Checkbox

```typescript
{
  type: 'checkbox',
  label: 'Accept Terms & Conditions',
  key: 'terms',
  required: true,
  errorMessages: { required: 'You must accept the terms.' }
}
```

### Switch Toggle

```typescript
{
  type: 'switch',
  label: 'Enable Notifications',
  key: 'notifications',
  value: true
}
```

### Textarea Field

```typescript
{
  type: 'textarea',
  label: 'Message',
  key: 'message',
  placeholder: 'Enter your message',
  textareaConfig: { rows: 5 },
}
```

---

## Conclusion

This form component provides a flexible and configurable form-building solution, allowing dynamic field customization, validation, and UI styling.

# NavBar Properties

## NavBarConfig Properties

### logo?

- Configuration for the navbar logo, defined by the LogoConfig interface.
  If set to null, no logo will be displayed.

### title?

- Configuration for the navbar title, defined by the TitleConfig interface.
  If set to null, no title will be displayed.

### buttons?

- Array of button group configurations, each defined by the ButtonGroupConfig interface.

### activeButton?

- The currently active button's identifier.

### isBorderTop?

- Boolean indicating if a top border should be displayed.

### isBorderBottom?

- Boolean indicating if a bottom border should be displayed.

## LogoConfig Properties

### url?

- The URL of the logo image.

### position?

- The position of the logo within the navbar:
  - left: Aligns the logo to the left.
  - middle: Centers the logo.
  - right: Aligns the logo to the right.

## TitleConfig Properties

### text?

- The text to be displayed as the navbar's title.

### position?

- The position of the title relative to the logo:
  - left: Title appears to the left of the logo.
  - right: Title appears to the right of the logo.

### alignWithLogo?

- true: Title and logo share the same alignment.
- false: Independent alignment for title and logo.

## ButtonGroupConfig Properties

### position?

- The position of the button group within the navbar:
  - left: Buttons appear on the left side.
  - center: Buttons are centered.
  - right: Buttons appear on the right side.

### alignWithLogo?

- true: Button group alignment matches the logo.
- false: Independent alignment for the button group.

### buttonsGroup?

- Array of button configurations, each defined by the NavButtonConfig interface.

## NavButtonConfig Properties

### id?

- A unique identifier for the button.

### text?

- The text displayed on the button.

### url?

- The URL the button navigates to when clicked.

### subMenu?

- Array of submenu configurations, each defined by the SubMenuConfig interface.

### type?

- Defines the button type:
  - normal
  - primary
  - secondary
  - bordered

### icon?

- The icon displayed on the button.

### showIcon?

- Boolean indicating if the icon should be shown.

### iconPosition?

- The position of the icon:
  - left, center, right, full, top, bottom

### shape?

- The shape of the button:
  - circle, square, rectangle

### corners?

- The corner styling of the button:
  - rounded, squared

### transparent?

- Boolean indicating if the button has a transparent background.

### foreground?

- The foreground color of the button.

### background?

- The background color of the button.

### shadow?

- Boolean indicating if the button has a shadow.

### border?

- Boolean indicating if the button has a border.

### navigate?

- Boolean indicating if the button triggers navigation.

### onClick?

- Function executed when the button is clicked.

### validate?

- Function executed to validate the button action.

### menuItems?

- Array of NavButtonConfig items representing a menu structure.

### isMenuButton?

- Boolean indicating if the button acts as a menu toggle.

## SubMenuConfig Properties

### text?

- The text displayed for the submenu item.

### url?

- The URL the submenu item navigates to when clicked.

# Carousel Component

This Angular standalone component displays an image carousel using the Swiper library.

## Configuration

The component accepts an `@Input()` property `config`, which allows customization of carousel behavior.

### Config Properties

#### images (array of objects)

- An array of image objects to be displayed in the carousel.

##### Image Object Properties:

- **src** (`string`)

iframeUrl?: string;

- URL for embedding content in an iframe within the banner.

iframeWidth?: string;

- Width of the iframe in the banner (e.g., "600px" or "100%").

iframeHeight?: string;

- Height of the iframe in the banner (e.g., "400px" or "100%").

forcePagination?: boolean;

- true: Enables pagination even with a small number of images.
- false: Pagination depends on the number of images.

## CarouselButtonsConfig Properties

prevIcon?: string;

- Icon displayed on the "Previous" button of the carousel.

nextIcon?: string;
-Icon displayed on the "Next" button of the carousel.

---

# Examples:

Showing the table.

{ key: 'name', title: 'Name', order: 1, type: 'text', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'email', title: 'Email', order: 2, type: 'text',minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'role', title: 'User Role', order: 3, type: 'text', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'imageUrl', title: 'Profile Picture', order: 4, type: 'image', minWidth: '150px', maxWidth: '250px', alignment: 'center' },
{ key: 'videoUrl', title: 'Profile Video', order: 5, type: 'video', minWidth: '150px', maxWidth: '250px',alignment: 'center' }

![alt text](./images/image.png)

---

## Table Component

Table Column Alignment Scenarios

Scenario 1: Changing Column Alignment

> Description: The text or media inside the columns should align as specified.

Example:
{ key: 'name', title: 'Name', alignment: 'center' },
{ key: 'email', title: 'Email', alignment: 'right' }
Test Case: Ensure the name column aligns to the center and the email column aligns to the right.

Scenario 2: Default Alignment

> Description: If no alignment is specified, the default alignment should be 'left'.

Example:
{ key: 'role', title: 'User Role' } // No alignment provided
Test Case: Ensure the text aligns to the left when no alignment is specified.

Scenario 3: Alignment Based on Data Type

> Description: Text columns should default to 'left' alignment, while numerical columns may default to 'right'.

Example:
{ key: 'name', title: 'Name', type: 'text', alignment: 'left' },
{ key: 'age', title: 'Age', type: 'number', alignment: 'right' }
Test Case: Verify that text is aligned to the left and numbers to the right.

![alt text](./images/image-5.png)

---

Table Column Width Scenarios

Scenario 4: Minimum and Maximum Width

> Description: Columns should adjust based on the minWidth and maxWidth properties.

Example:
{ key: 'name', title: 'Name', minWidth: '150px', maxWidth: '250px' }
Test Case: Ensure the name column is within the width range and does not exceed the defined width.

Scenario 5: Auto Width

> Description: When no minWidth or maxWidth is specified, the column should adjust based on its content.

Example:
{ key: 'email', title: 'Email' } // No width constraints
Test Case: Verify that the column adjusts naturally based on content.

![alt text](./images/image-4.png)

---

Table Row Height Scenarios

Scenario 6: Fixed Row Height
Description: Set a fixed row height for all rows.
Example:
rowHeight: '100px'
Test Case: Ensure all rows are of fixed height, regardless of content.

Scenario 7: Variable Row Height Based on Content
Description: Rows should dynamically expand based on their content, especially for images or videos.
Example:
{ key: 'imageUrl', title: 'Image', type: 'image' } // Rows adjust based on image size
Test Case: Ensure rows expand as needed when an image is loaded.

![alt text](./images/image-6.png)

---

Image and Video Loading States

Scenario 8: Handling Loading State for Images
Description: Display a loader until the image is fully loaded.
Example:
{ imageUrl: 'https://picsum.photos/200/300', imageLoading: true } // Show loader
Test Case: Verify that the loader appears while the image is loading and disappears after it's fully loaded.

Scenario 9: Handling Loading State for Videos
Description: Display a loader until the video is fully loaded or ready to play.
Example:
{ videoUrl: 'path-to-video.mp4', videoLoading: true } // Show loader
Test Case: Ensure the loader is displayed while the video is loading.

![alt text](./images/6.png)

---

Button Configuration Scenarios

Scenario 10: Default Button with Text Only
Description: Show a button with only text, no icon.
Example:
{ text: 'Edit', showIcon: false }
Test Case: Ensure the button displays only text and no icon.

![alt text](images/1.png)

Scenario 11: Button with Icon Only
Description: Show a button with only an icon, no text.
Example:
{ icon: '❌', showIcon: true, text: '', iconPosition: 'center' }
Test Case: Ensure the button displays only an icon, centered.
![alt text](images/2.png)

Scenario 12: Button with Both Icon and Text
Description: Display a button with both an icon and text.
Example:
{ text: 'Delete', icon: '❌', showIcon: true, iconPosition: 'left' }
Test Case: Verify that both the text and the icon appear as configured.
![alt text](images/3.png)

Scenario 13: Changing Button Icon Position
Description: Allow the icon to be positioned left, center, or right.
Example:
{ text: 'Edit', icon: '✏️', showIcon: true, iconPosition: 'right' }
Test Case: Check that the icon appears on the right side of the text.

![alt text](./images/image-8.png)

---

Actions in Table Scenarios

Scenario 14: Multiple Action Buttons in a Row
Description: Show multiple action buttons (e.g., Edit, Delete) in a single row.
Example:
actions: [
{ text: 'Edit', icon: '✏️', showIcon: true, iconPosition: 'left' },
{ text: 'Delete', icon: '❌', showIcon: true, iconPosition: 'left' }
]
Test Case: Ensure both buttons are rendered in the actions column.
![alt text](images/4.png)

Scenario 15: Conditionally Show Action Buttons
Description: Display buttons conditionally based on row data (e.g., show 'Edit' for Admin users only).
Example:
{ role: 'Admin', actions: [ { text: 'Edit', showIcon: true } ] }
Test Case: Check that only Admin rows display the Edit button.

![alt text](./images/image-10.png)

---

Dynamic Row Alignments

Scenario 16: Set Dynamic Alignments for Individual Rows
Description: Allow different rows to have different alignment settings based on conditions.
Example:
{ rowAlignments: { name: 'center', email: 'right' } }
Test Case: Verify that individual row alignments can differ from column alignments.

![alt text](./images/image.png)

---

Changing Table Column Titles Dynamically

Scenario 17: Dynamic Column Title Updates
Description: Dynamically change the title of a column based on certain conditions (e.g., localization).
Example:
{ key: 'name', title: 'Nombre' } // Changing title to Spanish
Test Case: Ensure the title changes appropriately based on the dynamic update.

![alt text](./images/image-13.png)

---

Sorting and Ordering Columns

Scenario 18: Reordering Columns
Description: Dynamically change the order of columns.
Example:
{ key: 'email', order: 1 }, { key: 'name', order: 2 }
Test Case: Verify that the email column appears first after changing the order.
![alt text](images/5.png)

Scenario 19: Disabling Sorting for Specific Columns
Description: Disable sorting for columns that shouldn't allow sorting (e.g., images, videos).
Example:
{ key: 'imageUrl', sortable: false }
Test Case: Ensure the image column cannot be sorted while others can.
![alt text](./images/image-14.png)

---

Customizable Loader for Buttons

Scenario 20: Displaying Loader on Button Click
Description: Replace the button icon with a loader upon clicking until the action completes.
Example:
actions: [
{ text: 'Save', icon: '💾', showIcon: true, iconPosition: 'left', isLoading: true }
]
Test Case: Check that the loader replaces the icon on button click and reverts after the action is complete.

![alt text](./images/image-15.png)

---

Row Expansion

Scenario 21: Expandable Rows
Description: Allow rows to expand to show additional details.
Example:
expandable: true, expandedContent: '<p>Extra details here</p>'
Test Case: Verify that clicking the row expands it to show additional content.

---

Filter Alignment

Scenario 22: Search Bar Alignment
Description: Change the Searching filter alignment
Example:
filterAlignment: true, expandedContent: '<p>Extra details here</p>'
Test Case: Verify that clicking the row expands it to show additional content.

![alt text](./images/image-16.png)

---

Change the Table

Scenario 23: Change the Table
Description: Changing the Table By clicking on the button.
Example:
<app-custom-table *ngIf="!isNewTable" [data]="users" [config]="tableConfig"></app-custom-table>
<app-custom-material-table *ngIf="isNewTable" [data]="users" [config]="tableConfig"></app-custom-material-table>

![alt text](./images/image-17.png)

---

Change the Shape

Scenario 24: Change the Shape
Description: Changeing the shape of the button.
Example:
<app-custom-table *ngIf="!isNewTable" [data]="users" [config]="tableConfig"></app-custom-table>
<app-custom-material-table *ngIf="isNewTable" [data]="users" [config]="tableConfig"></app-custom-material-table>

![alt text](./images/image-17.png)

---

## Button Component

Change the shape for the button

shape?: 'circle' | 'square' | 'rectangle';

Scenario 25: Change the Table
Description: Changing the Table By clicking on the button.
Example:
<app-custom-button
\*ngFor="let action of (element.actions || config.actions)"
[ngStyle]="{ 'margin-right': config.elementSpacing || '0px' }"
[text]="action.text"
[icon]="action.icon || ''"
[showIcon]="action.showIcon !== undefined ? action.showIcon : true"
[iconPosition]="action.iconPosition || 'left'"
[shape]="action.shape"
[corners]="action.corners"
[foreground]="action.foreground"
[background]="action.background"
[shadow]="action.shadow"
[transparent]="action.transparent"
(click)="action.text === 'Edit' ? startEditing(i) : handleActionClick(action, element)">
</app-custom-button>
actions : [
{
text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
{
text: 'Delete',
icon: '❌',
showIcon: true,
iconPosition: 'right',
onClick: this.deleteUser.bind(this),
shape: 'square',
corners: 'squared',
foreground: '#ff0000',
background: '#000000',
shadow: false,
transparent: true
},
],

![alt text](./images/image_25.png)

---

Change the corners for the button

corners?: 'rounded' | 'squared';

Scenario 26: Change the Table
Description: Changing the Table By clicking on the button.
Example:
actions : [
{
text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
{
text: 'Delete',
icon: '❌',
showIcon: true,
iconPosition: 'right',
onClick: this.deleteUser.bind(this),
shape: 'square',
corners: 'squared',
foreground: '#ff0000',
background: '#000000',
shadow: false,
transparent: true
},
],

![alt text](./images/image_26.png)

---

Change the transparency for the button

transparent?: boolean;

Scenario 27: Change the transparent
Description: Used for the transparent the background.
Example:
actions : [
{
text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
{
text: 'Delete',
icon: '❌',
showIcon: true,
iconPosition: 'right',
onClick: this.deleteUser.bind(this),
shape: 'square',
corners: 'squared',
foreground: '#ff0000',
background: '#000000',
shadow: false,
transparent: false
},
],

![alt text](./images/image_27.png)

---

Change the Foreground Color

foreground?: string;

Scenario 28: Change the Foreground Color
Description: Used for the change the foreground color for the button component.
Example:
actions : [
{
text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
{
text: 'Delete',
icon: '❌',
showIcon: true,
iconPosition: 'right',
onClick: this.deleteUser.bind(this),
shape: 'square',
corners: 'squared',
foreground: '#ff0000',
background: '#000000',
shadow: false,
transparent: false
},
],

![alt text](./images/image_28.png)

---

`background?: string;`

Scenario 29: Change the Background of the button
Description: Used for the change the background color for the button component.
Example:

```JSON
actions : [
    {
    text: 'Edit',
    icon: '✏️',
    showIcon: true,
    iconPosition: 'left',
    onClick: this.editUser.bind(this),
    shape: 'square',
    corners: 'rounded',
    foreground: '#ffffff',
    background: '#1976d2',
    shadow: true,
    transparent: false
  },
  {
    text: 'Delete',
    icon: '❌',
    showIcon: true,
    iconPosition: 'right',
    onClick: this.deleteUser.bind(this),
    shape: 'square',
    corners: 'squared',
    foreground: '#ff0000',
    background: '#000000',
    shadow: false,
    transparent: false
  }
]
```

![alt text](./images/image_28.png)

---

shadow?: boolean;

Scenario 30: Showing the shadow
Description: Used for the showing the shadow for the button.
Example:
actions : [
{
text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
{
text: 'Delete',
icon: '❌',
showIcon: true,
iconPosition: 'right',
onClick: this.deleteUser.bind(this),
shape: 'square',
corners: 'squared',
foreground: '#ff0000',
background: '#000000',
shadow: false,
transparent: false
},
],

![alt text](./images/image_28.png)

---

validate?: () => boolean;

Scenario 31: Validate message
Description: Used for the show the error message or validate when there are no text or icon available.
Example:
actions : [
{
text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
{
text: '',
icon: '',
showIcon: true,
iconPosition: 'right',
onClick: this.deleteUser.bind(this),
shape: 'square',
corners: 'squared',
foreground: '#ff0000',
background: '#000000',
shadow: false,
transparent: false
},
],

![alt text](./images/image_31.png)

---

## Table Component

margin : string;

Scenario 32: Add the Margin
Description: Used for the set the margin for the table component.
Example:
tableConfig: TableConfig = {
isHeader: true,
columns: [
{ key: 'name', title: 'Name', order: 1, type: 'text', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'email', title: 'Email', order: 2, type: 'text',minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'role', title: 'User Role', order: 3, type: 'text', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'imageUrl', title: 'Profile Picture', order: 4, type: 'image', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'videoUrl', title: 'Profile Video', order: 5, type: 'video', minWidth: '150px', maxWidth: '250px',alignment: 'left' }
],
itemsPerPage: 5,
maxItemsOptions: [5, 10, 15],
actions: [
{ text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
],
filterAlignment: 'center',
showFilter: true,
filterWidth: '500px',
margin: '20px',
};

![alt text](./images/image_32.png)

---

elementSpacing : string;

Scenario 33: Add the Element Spacing
Description: Used for the set the margin for the more than 2 elements.
Example:
tableConfig: TableConfig = {
isHeader: true,
columns: [
{ key: 'name', title: 'Name', order: 1, type: 'text', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'email', title: 'Email', order: 2, type: 'text',minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'role', title: 'User Role', order: 3, type: 'text', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'imageUrl', title: 'Profile Picture', order: 4, type: 'image', minWidth: '150px', maxWidth: '250px', alignment: 'left' },
{ key: 'videoUrl', title: 'Profile Video', order: 5, type: 'video', minWidth: '150px', maxWidth: '250px',alignment: 'left' }
],
itemsPerPage: 5,
maxItemsOptions: [5, 10, 15],
actions: [
{ text: 'Edit',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
onClick: this.editUser.bind(this),
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false
},
],
filterAlignment: 'center',
showFilter: true,
filterWidth: '500px',
margin: '20px',
elementSpacing: '10px'
};

![alt text](./images/image_33.png)

---

align: 'left' | 'center' | 'right';

Scenario 34: Title Alignment
Description: Used for set the alighment for the text as left|center|right.
Example:
header: {
title: 'Chihuahua',
align: 'center',
buttonsAlign: 'left',
buttons: [
{ text: 'Edit', align: 'left', icon: '✏️', action: this.onEdit, },
{ text: 'Delete', align: 'right', icon: '✏️', action: this.onDelete }
]
},

![alt text](./images/image_34.png)

---

buttonsAlign: 'left' | 'center' | 'right';

Scenario 35: Button Alignment
Description: Used for set the alighment for the button as left|center|right.
Example:
header: {
title: 'Chihuahua',
align: 'center',
buttonsAlign: 'left',
buttons: [
{ text: 'Edit', align: 'left', icon: '✏️', action: this.onEdit, },
{ text: 'Delete', align: 'right', icon: '✏️', action: this.onDelete }
]
},

![alt text](./images/image_34.png)

---

buttons?: ButtonConfig[];

Scenario 36: Button Congif
Description: ButtonConfig. Used for set the buttoncongif dynamically.
Example:
{
title: 'Chihuahua',
align: 'center',
buttonsAlign: 'left',
buttons: [
{ text: 'Edit', align: 'left', icon: '✏️', action: this.onEdit, },
{ text: 'Delete', align: 'right', icon: '✏️', action: this.onDelete }
]
}

![alt text](./images/image_34.png)

---

type: 'text' | 'text+buttons' | 'table';

Scenario 37: Body Type as 'text'
Description: Used for set the type of the body contant.
Example:
body: {
type: 'text',
align: 'right',
content: `The Chihuahua is a Mexican breed of toy dog. It is among the smallest of all dog breeds.`,
buttons: [
{ text: 'More Info', align: 'center', action: this.onMoreInfo }
]
},

![alt text](./images/image_35.png)

---

type: 'text' | 'text+buttons' | 'table';

Scenario 38: Body Type as 'table'
Description: Used for set the type of the body contant.
Example:
body: {
type: 'table',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog. It is among the smallest of all dog breeds.`,
buttons: [
{ text: 'More Info', align: 'center', action: this.onMoreInfo }
]
},

![alt text](./images/image_36.png)

---

type: 'text' | 'text+buttons' | 'table';

Scenario 39: Body Type as 'table'
Description: Used for set the type of the body contant.
Example:
body: {
type: 'table',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog. It is among the smallest of all dog breeds.`,
buttons: [
{ text: 'More Info', align: 'center', action: this.onMoreInfo }
]
},

![alt text](./images/image_36.png)

---

type: 'text' | 'text+buttons' | 'table';

Scenario 40: Body Type as 'text+buttons'
Description: Used for set the type of the body contant.
Example:
body: {
type: 'text+buttons',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog. It is among the smallest of all dog breeds.`,
buttons: [
{ text: 'More Info', align: 'left', action: this.onMoreInfo }
]
},

![alt text](./images/image_37.png)

---

align: 'left' | 'center' | 'right';

Scenario 41: Body Button Alignment
Description: Used for set the alighment for the button as left|center|right.
Example:
body: {
type: 'text+buttons',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog. It is among the smallest of all dog breeds.`,
buttons: [
{ text: 'More Info', align: 'left', action: this.onMoreInfo }
]
},

![alt text](./images/image_37.png)

---

### Footer

Scenario 42: Footer with Text Aligned Left
Description: The footer text "This is footer text aligned to the left" will appear in the footer aligned to the left.

Example:  
cardConfig: CardConfig = {
footer: {
type: 'text',
align: 'left',
text: 'This is footer text aligned to the left.'
}
};

![alt text](images/57.png)

---

Scenario 43: Footer with Text Aligned Center
Description: The footer text "This is footer text aligned to the center" will appear in the footer centered.

Example:  
cardConfig: CardConfig = {
footer: {
type: 'text',
align: 'center',
text: 'This is footer text aligned to the center.'
}
};

![alt text](images/58.png)

---

Scenario 44: Footer with Text Aligned Right
Description: The footer text "This is footer text aligned to the right" will appear in the footer aligned to the right.

Example:  
cardConfig: CardConfig = {
footer: {
type: 'text',
align: 'right',
text: 'This is footer text aligned to the right.'
}
};

![alt text](images/59.png)

---

Scenario 45: Footer with Text Aligned Left
Description: The footer text "This is footer text aligned to the left" will appear in the footer aligned to the left.

Example:  
cardConfig: CardConfig = {
footer: {
type: 'text',
align: 'left',
text: 'This is footer text aligned to the left.'
}
};

57

---

Footer Button Alignment

align: 'left' | 'center' | 'right';

Scenario 46: Footer Button Alignment
Description: Used for set the alighment for the button as left|center|right.
Example:
footer: {
type: 'buttons',
buttons: [
{
text: 'Edit',
align: 'left',
group: 'left',
action: this.onEdit,

      icon: '✏️',
      showIcon: true,
      iconPosition: 'left',
      shape: 'square',
      corners: 'rounded',
      foreground: '#ffffff',
      background: '#1976d2',
      shadow: true,
      transparent: false
    },
    { text: 'Cancel', align: 'left', group: 'left', action: this.onCancel },
    { text: 'Submit', align: 'right', group: 'right', action: this.onSubmit }

]
}

![alt text](./images/image_38.png)

---

Footer - Group of Button Alignment

align: 'left' | 'center' | 'right';

Scenario 47: Group of Button Alignment
Description: Used for set the alighment for the group of button as left|center|right.
Example:
footer: {
type: 'buttons',
buttons: [
{
text: 'Edit',
align: 'left',
group: 'left',
action: this.onEdit,

      icon: '✏️',
      showIcon: true,
      iconPosition: 'left',
      shape: 'square',
      corners: 'rounded',
      foreground: '#ffffff',
      background: '#1976d2',
      shadow: true,
      transparent: false
    },
    { text: 'Cancel', align: 'left', group: 'left', action: this.onCancel },
    { text: 'Submit', align: 'right', group: 'right', action: this.onSubmit }

]
}

![alt text](./images/image_38.png)

---

## Card Component

Card with header, body and footer

Scenario 48: Card with header, body and footer
Description: Showing the card component with all the details.
Example:
cardConfig: CardConfig = {
header: {
title: 'Chihuahua',
align: 'center',
buttonsAlign: 'left',
buttons: [
{ text: 'Edit', align: 'left', icon: '✏️', action: this.onEdit, },
{ text: 'Delete', align: 'right', icon: '✏️', action: this.onDelete }
]
},
body: {
type: 'table',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog. It is among the smallest of all dog breeds.`,
buttons: [
{ text: 'More Info', align: 'center', action: this.onMoreInfo }
]
},
footer: {
type: 'buttons',
buttons: [
{
text: 'Edit',
align: 'left',
group: 'left',
action: this.onEdit,

          icon: '✏️',
          showIcon: true,
          iconPosition: 'left',
          shape: 'square',
          corners: 'rounded',
          foreground: '#ffffff',
          background: '#1976d2',
          shadow: true,
          transparent: false
        },
        { text: 'Cancel', align: 'left', group: 'left', action: this.onCancel },
        { text: 'Submit', align: 'right', group: 'right', action: this.onSubmit }
      ]
    }

};

![alt text](./images/7.png)

---

### Image Properties

Scenario 49: Full Background Image
Description: Image fills the entire card as a background.
On hover, the image fades slightly and the description "This is a background image with hover description" is displayed.

Example:

`image: {
  position: 'background',
  src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
  title: 'Sample Background Title',
  description: 'This is a background image with hover description.',
  hoverEffect: true
}`

![alt text](images/47.png)

---

Scenario 50: Image Positioned in Top Half of Card
Description: Image is displayed in the top half of the card with the title "Top Half Image" overlaid.

Example:

`image: {
  position: 'top-half',
  src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
  title: 'Top Half Image',
  hoverEffect: false
}`

![alt text](images/48.png)

---

Scenario 51: Image Positioned in the Middle of the Card
Description: Image is centered vertically in the card.

Example:

image: {
position: 'middle',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Middle Positioned Image',
description: 'This description appears on hover.',
hoverEffect: true
}

![alt text](images/49.png)

---

Scenario 52: Image Positioned in Bottom Half of Card
Description: The image appears in the bottom half of the card.

Example:

image: {
position: 'bottom-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Bottom Half Image',
hoverEffect: false
}

![alt text](images/50.png)

---

Scenario 53: Square Image Under Title
Description: A square image is displayed under the title.

Example:

image: {
position: 'square-under-title',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Square Image Below Title',
hoverEffect: false
}

![alt text](images/51.png)

---

Scenario 54: Rectangle Image Under Title
Description: A rectangular image is displayed under the title "Rectangle Image Below Title".

Example:

image: {
position: 'rectangle-under-title',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Rectangle Image Below Title',
hoverEffect: false
}

![alt text](images/52.png)

---

Scenario 55: Dark Background with Image Title
Description: Image is displayed with a dark overlay background.

Example:

image: {
position: 'dark-background-title',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Dark Background Image Title',
description: 'Description on hover',
hoverEffect: true
}

![alt text](images/53.png)

---

Scenario 56: Image Hover Effect with Title and Description
Description: Image is displayed with title "Hover to See Description".

Example:

image: {
position: 'background',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Hover to See Description',
description: 'This description is shown on hover.',
hoverEffect: true
}

![alt text](images/54.png)

---

Scenario 57: Full Background Image
Description: Image fills the entire card as a background.

Example:

image: {
position: 'background',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Sample Background Title',
description: 'This is a background image with hover description.',
hoverEffect: true
}

![alt text](images/55.png)

---

### Card Properties

Scenario 58: Content with Description
Description: This test case ensures that a simple text description is displayed inside the content section of the card.

Example:
content: {
description: 'This is a sample card description for testing purposes.'
}

![Image: 39](images/39.png)

---

Scenario 59: Content with Custom HTML
Description: This test case validates that custom HTML content can be injected into the card’s content section.

Example:
content: {
customHtml: '<div><strong>Custom HTML Content For Card Section</strong></div>'
}

![Image: 40](images/40.png)

---

Scenario 60: Left-aligned Text in Details Section
Description: The text in the details section should be aligned to the left, and each row should contain one text item that is left-aligned.

Example:
content: {
details: {
align: 'left',
content: [
[{ text: 'Left Aligned Item 1' }],
[{ text: 'Left Aligned Item 2' }],
[{ text: 'Left Aligned Item 3' }]
]
}
}

![Image: 41](images/41.png)

---

Scenario 61: Center-aligned Text with Icons in Details Section
Description: The details section should display icons followed by text, all center-aligned. Each row should contain one item with an icon on the left and the text next to it.

Example:
content: {
details: {
align: 'center',
content: [
[{ icon: '🔧', text: 'Settings' }],
[{ icon: '📧', text: 'Email' }],
[{ icon: '⚙️', text: 'Configuration' }]
]
}
}

![Image: 42](images/42.png)

---

Scenario 62: Right-aligned Text with Multiple Rows
Description: The text in the details section should be aligned to the right, with each row containing one item that is right-aligned.

Example:
content: {
details: {
align: 'right',
content: [
[{ text: 'Right Aligned Item 1' }],
[{ text: 'Right Aligned Item 2' }],
[{ text: 'Right Aligned Item 3' }]
]
}
}

![alt text](images/43.png)

---

Scenario 63: Multi-column Layout with Text in Details Section
Description: The details section should display content in a two-row, three-column layout. Each row should contain three text items distributed evenly across the columns.

Example:
content: {
details: {
align: 'multi-column',
content: [
[
{ text: 'Column 1, Row 1' },
{ text: 'Column 2, Row 1' },
{ text: 'Column 3, Row 1' }
],
[
{ text: 'Column 1, Row 2' },
{ text: 'Column 2, Row 2' },
{ text: 'Column 3, Row 2' }
]
]
}
}

![alt text](images/44.png)

---

Scenario 64: Multi-column Layout with Icons and Text
Description: The details section should display a two-row, three-column layout with each item containing an icon on the left followed by text. All content should be evenly distributed across the rows and columns.

Example:
content: {
details: {
align: 'multi-column',
content: [
[
{ icon: '🏠', text: 'Home' },
{ icon: '💻', text: 'Work' },
{ icon: '📚', text: 'Library' }
],
[
{ icon: '🎨', text: 'Design' },
{ icon: '✍️', text: 'Write' },
{ icon: '🎤', text: 'Speak' }
]
]
}
}

![Image: 45](images/45.png)

---

Scenario 65: Multi-column Layout with Icons and Text
Description: The details section should display a two-row, three-column layout with each item containing an icon on the left followed by text. All content should be evenly distributed across the rows and columns.

Example:
`content: {
  details: {
    align: 'multi-column',
    content: [
      [
        { icon: '🏠', text: 'Home' },
        { icon: '💻', text: 'Work' },
        { icon: '📚', text: 'Library' }
      ],
      [
        { icon: '🎨', text: 'Design' },
        { icon: '✍️', text: 'Write' },
        { icon: '🎤', text: 'Speak' }
      ]
    ]
  }
}`

![Image: 45](images/45.png)

---

Scenario 66: Multi-column Layout with Icons and Text, description and customHtml
Description: All the detaild added for the Card Section.

Example:

`content: {
  description: 'This is the main content description.',
  customHtml: '<p>Custom HTML content here</p>',
  details: {
    align: 'multi-column',
    columns: 2,
    rows: 2,
    content: [
      [
        { text: 'Detail 1', icon: '🔍' },
        { text: 'Detail 2', icon: '📅' }
      ],
      [
        { text: 'Detail 3', icon: '💼' },
        { text: 'Detail 4', icon: '🌍' }
      ]
    ]
  }
}`

![alt text](images/46.png)

---

## Form Component Properties

Scenario 67: Required Validation for Text Field (Name)

Description: Test the behavior when the "Name" field is left blank, which is required.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
      validation: {
        minLength: 3,
        maxLength: 30
      },
      errorMessages: {
        required: 'Name is required.'
      }
    }
  ]
};`

![alt text](images/60.png)

---

Scenario 68: MinLength Validation for Text Field (Name)

Description: Test the behavior when fewer than 3 characters are entered in the "Name" field.

Example:

`fields: [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
      validation: {
        minLength: 3,
        maxLength: 30
      },
      errorMessages: {
        minLength: 'Name must be at least 3 characters long.'
      }
    }
  ];`

![alt text](images/61.png)

---

Scenario 69: MaxLength Validation for Text Field (Name)

Description: Test the behavior when more than 30 characters are entered in the "Name" field.

Example:

`fields: [
  {
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    required: true,
    validation: {
      minLength: 3,
      maxLength: 30
    },
    errorMessages: {
      maxLength: 'Name cannot exceed 30 characters.'
    }
  }
]`

![alt text](images/62.png)

---

Scenario 70: Number Field Validation (Age)

Description: Test the behavior when an invalid number is entered for the "Age" field, with the minimum value of 18 and maximum value of 60.

Example:

`fields: [
  {
    type: 'number',
    label: 'Age',
    placeholder: 'Enter your age',
    validation: {
      minValue: 18,
      maxValue: 60
    },
    errorMessages: {
      minValue: 'Age must be at least 18.',
      maxValue: 'Age must be 60 or less.'
    }
  }
]`

![alt text](images/63.png)

---

Scenario 71: Textarea Field with Custom Toolbar (Bio)

Description: Test the textarea field with a custom toolbar, ensuring that the text styling options (bold, italic, color) work as expected.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'textarea',
      label: 'Bio',
      placeholder: 'Write your bio',
      textareaConfig: {
        rows: 5,
        toolbarOptions: [
          { type: 'bold' },
          { type: 'italic' },
          { type: 'color' }
        ]
      },
      validation: {
        minLength: 10,
        maxLength: 200
      },
      style: {
        inlineStyles: { 'background-color': '#db0f0f', 'color': '#15763d', 'font-size': '30px' }
      }
    }
  ]
};`

![alt text](images/64.png)

---

Scenario 72: Required Date Field (Date of Birth)

Description: Test the required validation for the "Date of Birth" field to ensure that the field cannot be left empty.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'date',
      label: 'Date of Birth',
      placeholder: 'Pick a date',
      required: true,
      errorMessages: {
        required: 'Date of Birth is required.'
      }
    }
  ]
};`

![alt text](images/65.png)

---

Scenario 73: Valid Form Submission

Description: Test a scenario where all form fields are filled with valid input, ensuring that the form can be submitted without errors.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
      validation: {
        minLength: 3,
        maxLength: 30
      }
    },
    {
      type: 'number',
      label: 'Age',
      validation: {
        minValue: 18,
        maxValue: 60
      }
    },
    {
      type: 'date',
      label: 'Date of Birth',
      required: true
    },
    {
      type: 'file',
      label: 'Profile Picture',
      fileConfig: {
        allowedTypes: ['image/png']
      }
    },
    {
      type: 'textarea',
      label: 'Bio',
      validation: {
        minLength: 10,
        maxLength: 200
      }
    }
  ]
};`

![alt text](images/66.png)

---

Scenario 74: Textarea Field Min and Max Length Validation (Bio)

Description: Test the behavior when the input text for the "Bio" field does not meet the minimum or exceeds the maximum character length.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'textarea',
      label: 'Bio',
      placeholder: 'Write your bio',
      validation: {
        minLength: 10,
        maxLength: 200
      },
      errorMessages: {
        minLength: 'Bio must be at least 10 characters long.',
        maxLength: 'Bio cannot exceed 200 characters.'
      }
    }
  ]
};`

![alt text](images/67.png)

---

Scenario 75: Custom Inline Styles for Text Field (Name)

Description: Test the application of custom inline styles for the "Name" field.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      required: true,
      style: {
        inlineStyles: {
          'font-size': '18px',
          'font-weight': 'bold',
          'color': '#333'
        }
      }
    }
  ]
};`

![alt text](images/68.png)

---

Scenario 76: Optional Text Field without Validation (Middle Name)

Description: Test the behavior of an optional text field that does not require validation.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'text',
      label: 'Middle Name',
      placeholder: 'Enter your middle name',
      required: false
    }
  ]
};`

![alt text](images/69.png)

---

Scenario 77: Dynamic Error Messages for Custom Validation

Description: Test a custom validation rule for the "Age" field, which displays a specific error message when the input is outside the valid range.

Example:

`formConfig: FormConfig = {
  fields: [
    {
      type: 'number',
      label: 'Age',
      placeholder: 'Enter your age',
      validation: {
        minValue: 18,
        maxValue: 60,
        customErrorMessage: 'Age must be between 18 and 60.'
      }
    }
  ]
};`

![alt text](images/70.png)

---

## Nav Bar Component Properties

Scenario 78: Default Configuration

Description: Logo is displayed on the left, Title is aligned to the right of the logo

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
  };`

![alt text](images/71.png)

---

Scenario 79: Buttons on the Left

Description: Logo is on the left, and the title is on the right of the logo, The "Settings" button is positioned on the left without aligning to the logo.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
    url: 'https://picsum.photos/100/100',
    position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'left',
        alignWithLogo: false,
        buttonsGroup: [
          {
            text: 'Settings',
            subMenu: [
              { text: 'Profile', url: '/profile' },
              { text: 'Account', url: '/account' }
            ]
          }
        ]
      }
    ]
  };`

![alt text](images/72.png)

---

Scenario 80: Default Configuration

Description: Logo is displayed on the left, Title is aligned to the right of the logo

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/',
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
  };`

![alt text](images/73.png)

---

Scenario 81: No Logo and Title

Description: No logo or title is displayed, The "Help" button appears in the center with its submenu items

Example:

`navbarConfig: NavBarConfig = {
    logo: null,
    title: null,
    buttons: [
      {
        position: 'center',
        alignWithLogo: false,
        buttonsGroup: [
          {
            text: 'Help',
            subMenu: [
              { text: 'FAQ', url: '/faq' },
              { text: 'Contact', url: '/contact' }
            ]
          }
        ]
      }
    ],
  };`

![alt text](images/74.png)

---

Scenario 82: Multiple Button Groups

Description: The logo appears on the left with the title next to it, A "Home" button appears on the left with a submenu for "Dashboard", A "Logout" button appears on the right with no submenu.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
    url: 'https://picsum.photos/100/100',
    position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'left',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'left',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            subMenu: [
              { text: 'Dashboard', url: '/dashboard' }
            ]
          }
        ]
      },
      {
        position: 'right',
        alignWithLogo: false,
        buttonsGroup: [
          {
            text: 'Logout',
            subMenu: []
          }
        ]
      }
    ]
  };`

![alt text](images/75.png)

---

Scenario 83: Submenu Without URL

Description: The "More" button displays correctly, The submenu for "More" shows "Option 1" without a link and "Option 2" with a link.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
    url: 'https://picsum.photos/100/100',
    position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: false,
        buttonsGroup: [
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' }, // No URL
              { text: 'Option 2', url: '/option2' }
            ]
          }
        ]
      }
    ]
  };`

![alt text](images/76.png)

---

Scenario 84: Complete Empty Configuration

Description: No elements are displayed in the navbar.

Example:

`navbarConfig: NavBarConfig = {
    logo: null,
    title: null,
    buttons: [],
    banner: {
      position: 'middle',
      imageSrc: [
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/238/600/300',
        'https://picsum.photos/id/239/600/300'
      ],
      width: 'full',
      iframeUrl: 'https://www.example.com',
      iframeWidth: '100%',
      iframeHeight: '100px',
      slideshow: true,
    }
  };`

![alt text](images/77.png)

---

Scenario 85: Banner Positioned in the Middle with Images.

Description: No elements are displayed in the navbar.

Example:

`navbarConfig: NavBarConfig = {
  logo: {
    url: 'https://picsum.photos/75/75',
    position: 'left'
  },
  title: {
    text: 'My Application',
    position: 'right',
    alignWithLogo: true,
  },
  buttons: [
    {
      position: 'right',
      alignWithLogo: true,
      buttonsGroup: [
        {
          text: 'Home',
          url: 'https://www.google.com/'
        },
        {
          text: 'About',
          subMenu: [
            { text: 'Option 1' },
            { text: 'Option 2' }
          ],
          url: 'https://www.google.com/'
        },
        {
          text: 'More',
          subMenu: [
            { text: 'Option 1' },
            { text: 'Option 2' }
          ]
        }
      ],
    }
  ],
  banner: {
    position: 'middle',
    imageSrc: [
      'https://picsum.photos/id/237/600/300',
      'https://picsum.photos/id/238/600/300',
      'https://picsum.photos/id/239/600/300'
    ],
    width: 'full',
    slideshow: true,
  }
};`

![alt text](images/78.png)

---

Scenario 86: Banner with Iframe Embed in Middle

Description: The banner displays an embedded iframe in the middle of the navbar, The iframe occupies 100% width and has a height of 100px., No images are shown since imageSrc is not provided.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/'
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
    banner: {
      position: 'middle',
      iframeUrl: 'https://www.example.com',
      iframeWidth: '100%',
      iframeHeight: '100px',
    }
  };`

![alt text](images/79.png)

---

Scenario 87: Full-Width Banner with Static Image

Description: A single static image appears in the middle of the navbar with full width, No slideshow functionality is active since slideshow is set to false.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/'
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
    banner: {
      position: 'middle',
      imageSrc: ['https://picsum.photos/id/237/600/300'],
      width: 'full',
      slideshow: false,
    }
  };`

![alt text](images/80.png)

---

Scenario 88: Left-Aligned Banner with Slideshow and No Iframe

Description: The banner displays a slideshow positioned on the left side of the navbar, The banner width is half of the navbar width, with images rotating every few seconds.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/'
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
    banner: {
      position: 'left',
      imageSrc: [
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/238/600/300'
      ],
      width: 'half',
      slideshow: true,
    }
  };`

![alt text](images/81.png)

---

Scenario 89: Change the height and width for iframe.

Description: Change the height and width for iframe.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/'
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
    banner: {
      position: 'middle',
      imageSrc: [
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/238/600/300',
        'https://picsum.photos/id/239/600/300'
      ],
      width: 'full',
      iframeUrl: 'https://www.example.com',
      iframeWidth: '100%',
      iframeHeight: '500px',
      slideshow: true,
    }
  };`

![alt text](images/82.png)

---

Scenario 90: Change the Force Pagination.

Description: Change the Force Pagination as true when we have more then 10 images for the image carousel.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/'
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
    banner: {
      position: 'middle',
      imageSrc: [
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/238/600/300',
        'https://picsum.photos/id/239/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/237/600/300',
      ],
      width: 'full',
      iframeUrl: 'https://www.example.com',
      iframeWidth: '100%',
      iframeHeight: '300px',
      slideshow: true,
      forcePagination: true,
    },
  };`

![alt text](images/83.png)

---

Scenario 91: Change the Force Pagination.

Description: Change the Force Pagination as false when we have more then 10 images for the image carousel.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/'
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
    banner: {
      position: 'middle',
      imageSrc: [
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/238/600/300',
        'https://picsum.photos/id/239/600/300',
        'https://picsum.photos/id/237/600/300',
      ],
      width: 'full',
      iframeUrl: 'https://www.example.com',
      iframeWidth: '100%',
      iframeHeight: '300px',
      slideshow: true,
      forcePagination: false,
    },
  };`

![alt text](images/84.png)

---

Scenario 92: Set the button icon for previous and next.

Description: Set the button when the forcePagination true for the previous and next button.

Example:

`navbarConfig: NavBarConfig = {
    logo: {
      url: 'https://picsum.photos/75/75',
      position: 'left'
    },
    title: {
      text: 'My Application',
      position: 'right',
      alignWithLogo: true,
    },
    buttons: [
      {
        position: 'right',
        alignWithLogo: true,
        buttonsGroup: [
          {
            text: 'Home',
            url: 'https://www.google.com/'
          },
          {
            text: 'About',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ],
            url: 'https://www.google.com/'
          },
          {
            text: 'More',
            subMenu: [
              { text: 'Option 1' },
              { text: 'Option 2' }
            ]
          }
        ],
      }
    ],
    banner: {
      position: 'middle',
      imageSrc: [
        'https://picsum.photos/id/237/600/300',
        'https://picsum.photos/id/238/600/300',
        'https://picsum.photos/id/239/600/300',
        'https://picsum.photos/id/237/600/300',
      ],
      width: 'full',
      iframeUrl: 'https://www.example.com',
      iframeWidth: '100%',
      iframeHeight: '300px',
      slideshow: true,
      forcePagination: true,
    },
  };`

![alt text](images/85.png)

---

## Card Component Properties

Scenario 93: Change the width of the Cards.

Description: Change the width of the cards when the toggle button is on.

Example:

`maxWidth = '400px';

cardConfigs: CardConfig[] = [{
//layout: 'grid',
// width: 100,
header: {
title: 'Chihuahua 1',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 1.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
];`

![alt text](images/86.png)

---

Scenario 94: Toggle button is off to show the cards as list view.

Description: Toggle button is off to show the cards as list view.

Example:

`maxWidth = '400px';

cardConfigs: CardConfig[] = [{
//layout: 'grid',
// width: 100,
header: {
title: 'Chihuahua 1',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 1.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
{
//layout: 'list', //Use the list layout
// width: 100,
header: {
title: 'Chihuahua 2',
align: 'center',
buttonsAlign: 'left',
buttons: [{
text: 'Edit',
align: 'left',
icon: '✏️'
},
{
text: 'Delete',
align: 'right',
icon: '✏️'
},
],
},
image: {
position: 'top-half',
src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
title: 'Title on Image',
description: 'This is a description shown on hover.',
hoverEffect: false,
},
content: {
description: 'This is the main content description for Chihuahua 2.',
customHtml: '<p>Custom HTML content here</p>',
details: {
align: 'multi-column',
columns: 2,
rows: 2,
content: [
[{
text: 'Detail 1',
icon: '🔍'
},
{
text: 'Detail 2',
icon: '📅'
},
],
[{
text: 'Detail 3',
icon: '💼'
},
{
text: 'Detail 4',
icon: '🌍'
},
],
],
},
},
body: {
type: 'text',
align: 'center',
content: `The Chihuahua is a Mexican breed of toy dog.`,
buttons: [{
text: 'More Info',
align: 'center'
}],
},
footer: {
type: 'buttons',
align: 'left',
text: 'This is a dynamically aligned footer text',
buttons: [{
text: 'Edit',
align: 'left',
group: 'left',
icon: '✏️',
showIcon: true,
iconPosition: 'left',
shape: 'square',
corners: 'rounded',
foreground: '#ffffff',
background: '#1976d2',
shadow: true,
transparent: false,
},
{
text: 'Cancel',
align: 'left',
group: 'left'
},
{
text: 'Submit',
align: 'right',
group: 'right'
},
],
},
},
];`

![alt text](images/87.png)

---

Scenario 95: Footer Component

Description: Footer Component with all the properties.

Example:

`footerConfig: FooterConfig = {
    columns: [
      {
        title: 'About Us',
        description: 'Learn more about our company and team.',
        buttonText: 'Contact',
        buttonUrl: 'https://facebook.com',
        lineText: 'Connect with us on social media.',
        iconButtons: [
          { icon: 'Google', url: 'https://google.com' },
          { icon: 'facebook', url: 'https://facebook.com' },
        ],
      },
      {
        lineText: 'Connect with us on social media.',
        iconButtons: [
          { icon: 'Google', url: 'https://google.com' },
          { icon: 'facebook', url: 'https://facebook.com' },
        ],
      },
    ],
    iframeUrl: 'https://example.com',
    iframeWidth: '400',
    iframeHeight: '300',
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: '#F31212',
      align: 'left',
      margin: '10px 10px',
    },
  };`

![alt text](images/90.png)

---

Scenario 96: General Column Rendering

Description: Ensure that all columns in the footer are rendered

Example:

`footerConfig: FooterConfig = {
    columns: [
      { title: 'Column 1' },
      { title: 'Column 2', description: 'Some description for column 2.' },
    ],
  };`

![alt text](images/91.png)

---

Scenario 97: Column Title and Description

Description: Showing the Title and the Description.

Example:

`footerConfig: FooterConfig = {
    columns: [
      {
        title: 'Our Services',
        description: 'Explore our wide range of services.',
      },
    ],
  };`

![alt text](images/92.png)

---

Scenario 98: Button Functionality

Description: Button labeled Reach Out appears

Example:

`footerConfig: FooterConfig = {
    columns: [
      {
        title: 'Contact Us',
        buttonText: 'Reach Out',
        buttonUrl: 'https://example.com/contact',
      },
    ],
  };`

![alt text](images/93.png)

---

Scenario 99: Icon Buttons

Description: Icon buttons for "home" and "email" appear.

Example:

`footerConfig: FooterConfig = {
    columns: [
      {
        iconButtons: [
          { icon: 'home', url: 'https://example.com/home' },
          { icon: 'email', url: 'mailto:support@example.com' },
        ],
      },
    ],
  };`

![alt text](images/94.png)

---

Scenario 100: Iframe Integration

Description: An iframe is displayed with 600px width and 400px height.

Example:

`footerConfig: FooterConfig = {
    iframeUrl: 'https://example.com',
    iframeWidth: '600',
    iframeHeight: '400',
  };`

![alt text](images/95.png)

---

Scenario 101: Bottom Bar Rendering

Description: Bottom Bar contains logourl, text, year, name, color, alignments, margins.

Example:

`footerConfig: FooterConfig = {
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: '#F31212',
      align: 'left',
      margin: '10px 10px',
    },
  };`

![alt text](images/96.png)

---

Scenario 102: Change the bootom bar alignments.

Description: Change the bootom bar alignments. to the right.

Example:

`footerConfig: FooterConfig = {
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: '#F31212',
      align: 'right',
      margin: '10px 10px',
    },
  };`

![alt text](images/97.png)

---

Scenario 103: Change the bootom bar alignments.

Description: Change the bootom bar alignments. to the center.

Example:

`footerConfig: FooterConfig = {
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: '#F31212',
      align: 'center',
      margin: '10px 10px',
    },
  };`

![alt text](images/98.png)

---

Scenario 104: Margin changes.

Description: Change the marfin for the bottom bar.

Example:

`footerConfig: FooterConfig = {
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: '#4ad90d',
      align: 'left',
      margin: '10px 10px',
    },
  };`

![alt text](images/99.png)

---

Scenario 105: Change the bg color.

Description: Change the background color.

Example:

`footerConfig: FooterConfig = {
    columns: [
      {
        title: 'Contact Us',
        buttonText: 'Reach Out',
        buttonUrl: 'https://example.com/contact',
      },
    ],
  };`

![alt text](images/100.png)

---

Scenario 106: Dynamic Column Adjustments

Description: Footer layout adjusts dynamically to accommodate them.

Example:

`footerConfig: FooterConfig = {
    columns: [
      { title: 'Column 1' },
      { title: 'Column 2' },
      { title: 'Column 3' },
      { title: 'Column 4' },
    ],
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: '#F31212',
      align: 'left',
      margin: '10px 10px',
    },
  };`

![alt text](images/101.png)

---

Scenario 107: Logo and Text Alignment in Bottom Bar

Description: Ensure separate alignment of logo and text in the bottom bar.

Example:

`footerConfig: FooterConfig = {
    bottomBar: {
      align: 'center',
      logoUrl: 'https://picsum.photos/200',
    },
  };`

![alt text](images/102.png)

---

## PopUp Component

Scenario 108: Default Popup

Description: Test if the popup renders with a default title, hook message, and description

Example:

`popupConfig: PopupConfig = {
  title: 'Welcome to our Platform',
  hookMessage: 'Your journey starts here!',
  description: 'Subscribe now to receive the latest updates.',
};`

![alt text](images/103.png)

---

Scenario 109: Dynamic Title Styling

Description: Verify if the titleStyle property applies the specified styles to the title.

Example:

`popupConfig: PopupConfig = {
  title: 'Welcome Back!',
  titleStyle: {
    fontWeight: 'bold',
    fontSize: '32px',
    color: '#ff5722',
    textAlign: 'center',
  },
};`

![alt text](images/104.png)

---

Scenario 110: Dynamic Hook Message Styling

Description: Test if the hookStyle property correctly applies styles to the hook message.

Example:

`popupConfig: PopupConfig = {
  hookMessage: 'Limited Time Offer!',
  hookStyle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#3f51b5',
    textTransform: 'uppercase',
  },
};`

![alt text](images/105.png)

---

Scenario 111: Dynamic Description Styling

Description: Ensure that the descriptionStyle property modifies the description text styling.

Example:

`popupConfig: PopupConfig = {
  title: 'Subscribe to our newsletter',
  description: 'Sign up now to unlock premium features.',
  descriptionStyle: {
    fontSize: '14px',
    color: '#607d8b',
    fontStyle: 'italic',
  },
};`

![alt text](images/106.png)

---

Scenario 112: Background Customization

Description: Validate if the popup displays the correct background image or color.

Example:

`popupConfig: PopupConfig = {
    title: 'Subscribe to our newsletter',
    description: 'Get the latest updates directly to your inbox.',
    backgroundImage: 'https://stock.adobe.com/in/search?k=light%20background',
  };`

![alt text](images/107.png)

---

Scenario 113: Action Buttons

Description: Verify if the buttons render correctly and trigger the assigned actions.

Example:

`popupConfig: PopupConfig = {
    title: 'Subscribe to our newsletter',
    description: 'Get the latest updates directly to your inbox.',
    backgroundColor: '#f9f9f9',
    actionButtons: [
      { text: 'Confirm', action: () => console.log('Confirmed!') },
      { text: 'Cancel', action: () => console.log('Cancelled!') },
    ],
  };`

![alt text](images/108.png)

---

Scenario 114: Hook Message and Description Empty

Description: Popup works as expected when hookMessage or description is omitted.

Example:

`popupConfig: PopupConfig = {
  title: 'Hello User',
  backgroundColor: '#ffffff',
  actionButtons: [
    { text: 'Get Started', action: () => console.log('Started!') },
  ],
};`

![alt text](images/109.png)

---

Scenario 115: Hook Message and Description Empty

Description: All configuration options applied.

Example:

`popupConfig: PopupConfig = {
    title: 'Subscribe to our newsletter',
    titleStyle: {
      fontWeight: 'bold',
      fontSize: '28px',
      color: '#4caf50',
      textAlign: 'center',
    },
    hookMessage: 'Stay updated!',
    hookStyle: {
      fontWeight: 'bold',
      fontSize: '24px',
      color: '#007bff',
    },
    description: 'Get the latest updates directly to your inbox.',
    descriptionStyle: {
      fontSize: '16px',
      color: '#333',
      fontStyle: 'italic',
    },
    backgroundImage: '',
    backgroundColor: '#f9f9f9',
    actionButtons: [
      {
        text: 'Subscribe',
        action: () => this.subscribeUser(),
      },
    ],
  };`

![alt text](images/110.png)

---

Scenario 116: Button Alignment.

Description: Change the button position as center.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'center';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'subscribe';

popupConfig: PopupConfig = this.getPopupConfig();

openPopup(): void {
this.isPopupVisible = true;
this.popupConfig = this.getPopupConfig();
}

setPopupType(type: 'subscribe' | 'notification' | 'freeForm'): void {
this.popupType = type;
this.popupConfig = this.getPopupConfig();
}

getPopupConfig(): PopupConfig {
switch (this.popupType) {
case 'subscribe':
return {
type: 'subscribe',
title: 'Subscribe to our newsletter',
hookMessage: 'Stay updated!',
description: 'Get the latest updates directly to your inbox.',
backgroundColor: '#f9f9f9',
actionButtons: [
{ text: 'Subscribe', action: () => this.subscribeUser() },
],
};
case 'notification':
return {
type: 'notification',
title: 'System Notification',
description: 'This is an important system alert.',
backgroundColor: '#ffcccc',
actionButtons: [{ text: 'Dismiss', action: () => this.closePopup() }],
};
case 'freeForm':
return {
type: 'freeForm',
title: 'Custom Form',
description: 'Please fill out the following fields:',
backgroundColor: '#e0f7fa',
actionButtons: [{ text: 'Submit', action: () => this.submitForm() }],
};
}
}`

![alt text](images/111.png)

---

Scenario 117: Button Alignment.

Description: Change the button position as left.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'left';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'subscribe';

popupConfig: PopupConfig = this.getPopupConfig();

openPopup(): void {
this.isPopupVisible = true;
this.popupConfig = this.getPopupConfig();
}

setPopupType(type: 'subscribe' | 'notification' | 'freeForm'): void {
this.popupType = type;
this.popupConfig = this.getPopupConfig();
}

getPopupConfig(): PopupConfig {
switch (this.popupType) {
case 'subscribe':
return {
type: 'subscribe',
title: 'Subscribe to our newsletter',
hookMessage: 'Stay updated!',
description: 'Get the latest updates directly to your inbox.',
backgroundColor: '#f9f9f9',
actionButtons: [
{ text: 'Subscribe', action: () => this.subscribeUser() },
],
};
case 'notification':
return {
type: 'notification',
title: 'System Notification',
description: 'This is an important system alert.',
backgroundColor: '#ffcccc',
actionButtons: [{ text: 'Dismiss', action: () => this.closePopup() }],
};
case 'freeForm':
return {
type: 'freeForm',
title: 'Custom Form',
description: 'Please fill out the following fields:',
backgroundColor: '#e0f7fa',
actionButtons: [{ text: 'Submit', action: () => this.submitForm() }],
};
}
}`

![alt text](images/112.png)

---

Scenario 118: Button Alignment.

Description: Change the button position as right.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'subscribe';

popupConfig: PopupConfig = this.getPopupConfig();

openPopup(): void {
this.isPopupVisible = true;
this.popupConfig = this.getPopupConfig();
}

setPopupType(type: 'subscribe' | 'notification' | 'freeForm'): void {
this.popupType = type;
this.popupConfig = this.getPopupConfig();
}

getPopupConfig(): PopupConfig {
switch (this.popupType) {
case 'subscribe':
return {
type: 'subscribe',
title: 'Subscribe to our newsletter',
hookMessage: 'Stay updated!',
description: 'Get the latest updates directly to your inbox.',
backgroundColor: '#f9f9f9',
actionButtons: [
{ text: 'Subscribe', action: () => this.subscribeUser() },
],
};
case 'notification':
return {
type: 'notification',
title: 'System Notification',
description: 'This is an important system alert.',
backgroundColor: '#ffcccc',
actionButtons: [{ text: 'Dismiss', action: () => this.closePopup() }],
};
case 'freeForm':
return {
type: 'freeForm',
title: 'Custom Form',
description: 'Please fill out the following fields:',
backgroundColor: '#e0f7fa',
actionButtons: [{ text: 'Submit', action: () => this.submitForm() }],
};
}
}`

![alt text](images/113.png)

---

Scenario 119: Popup Visible.

Description: Popup is visible or not is based on the isPopupVisible. Once true that will be visible all the time.

Example:

`isPopupVisible = true;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'subscribe';

popupConfig: PopupConfig = this.getPopupConfig();

openPopup(): void {
this.isPopupVisible = true;
this.popupConfig = this.getPopupConfig();
}

setPopupType(type: 'subscribe' | 'notification' | 'freeForm'): void {
this.popupType = type;
this.popupConfig = this.getPopupConfig();
}

getPopupConfig(): PopupConfig {
switch (this.popupType) {
case 'subscribe':
return {
type: 'subscribe',
title: 'Subscribe to our newsletter',
hookMessage: 'Stay updated!',
description: 'Get the latest updates directly to your inbox.',
backgroundColor: '#f9f9f9',
actionButtons: [
{ text: 'Subscribe', action: () => this.subscribeUser() },
],
};
case 'notification':
return {
type: 'notification',
title: 'System Notification',
description: 'This is an important system alert.',
backgroundColor: '#ffcccc',
actionButtons: [{ text: 'Dismiss', action: () => this.closePopup() }],
};
case 'freeForm':
return {
type: 'freeForm',
title: 'Custom Form',
description: 'Please fill out the following fields:',
backgroundColor: '#e0f7fa',
actionButtons: [{ text: 'Submit', action: () => this.submitForm() }],
};
}
}`

![alt text](images/114.png)

---

Scenario 120: Popup Type.

Description: Change the popup type as subscribe. It will change the button text and the popup contant.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'subscribe';

popupConfig: PopupConfig = this.getPopupConfig();

openPopup(): void {
this.isPopupVisible = true;
this.popupConfig = this.getPopupConfig();
}

setPopupType(type: 'subscribe' | 'notification' | 'freeForm'): void {
this.popupType = type;
this.popupConfig = this.getPopupConfig();
}

getPopupConfig(): PopupConfig {
switch (this.popupType) {
case 'subscribe':
return {
type: 'subscribe',
title: 'Subscribe to our newsletter',
hookMessage: 'Stay updated!',
description: 'Get the latest updates directly to your inbox.',
backgroundColor: '#f9f9f9',
actionButtons: [
{ text: 'Subscribe', action: () => this.subscribeUser() },
],
};
case 'notification':
return {
type: 'notification',
title: 'System Notification',
description: 'This is an important system alert.',
backgroundColor: '#ffcccc',
actionButtons: [{ text: 'Dismiss', action: () => this.closePopup() }],
};
case 'freeForm':
return {
type: 'freeForm',
title: 'Custom Form',
description: 'Please fill out the following fields:',
backgroundColor: '#e0f7fa',
actionButtons: [{ text: 'Submit', action: () => this.submitForm() }],
};
}
}`

![alt text](images/115.png)

---

Scenario 121: Popup Type.

Description: Change the popup type as notification. It will change the button text and the popup contant.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'subscribe';

popupConfig: PopupConfig = this.getPopupConfig();

openPopup(): void {
this.isPopupVisible = true;
this.popupConfig = this.getPopupConfig();
}

setPopupType(type: 'subscribe' | 'notification' | 'freeForm'): void {
this.popupType = type;
this.popupConfig = this.getPopupConfig();
}

getPopupConfig(): PopupConfig {
switch (this.popupType) {
case 'subscribe':
return {
type: 'subscribe',
title: 'Subscribe to our newsletter',
hookMessage: 'Stay updated!',
description: 'Get the latest updates directly to your inbox.',
backgroundColor: '#f9f9f9',
actionButtons: [
{ text: 'Subscribe', action: () => this.subscribeUser() },
],
};
case 'notification':
return {
type: 'notification',
title: 'System Notification',
description: 'This is an important system alert.',
backgroundColor: '#ffcccc',
actionButtons: [{ text: 'Dismiss', action: () => this.closePopup() }],
};
case 'freeForm':
return {
type: 'freeForm',
title: 'Custom Form',
description: 'Please fill out the following fields:',
backgroundColor: '#e0f7fa',
actionButtons: [{ text: 'Submit', action: () => this.submitForm() }],
};
}
}`

![alt text](images/116.png)

---

Scenario 122: Popup Type.

Description: Change the popup type as freeForm. It will change the button text and the popup contant.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'freeForm';

popupConfig: PopupConfig = this.getPopupConfig();

openPopup(): void {
this.isPopupVisible = true;
this.popupConfig = this.getPopupConfig();
}

setPopupType(type: 'subscribe' | 'notification' | 'freeForm'): void {
this.popupType = type;
this.popupConfig = this.getPopupConfig();
}

getPopupConfig(): PopupConfig {
switch (this.popupType) {
case 'subscribe':
return {
type: 'subscribe',
title: 'Subscribe to our newsletter',
hookMessage: 'Stay updated!',
description: 'Get the latest updates directly to your inbox.',
backgroundColor: '#f9f9f9',
actionButtons: [
{ text: 'Subscribe', action: () => this.subscribeUser() },
],
};
case 'notification':
return {
type: 'notification',
title: 'System Notification',
description: 'This is an important system alert.',
backgroundColor: '#ffcccc',
actionButtons: [{ text: 'Dismiss', action: () => this.closePopup() }],
};
case 'freeForm':
return {
type: 'freeForm',
title: 'Custom Form',
description: 'Please fill out the following fields:',
backgroundColor: '#e0f7fa',
actionButtons: [{ text: 'Submit', action: () => this.submitForm() }],
};
}
}`

![alt text](images/117.png)

---

Scenario 123: Button background.

Description: Change the button background based on the type. For the subscribe.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'subscribe';

popupConfig: PopupConfig = this.getPopupConfig();

getButtonBackground(): string {
return this.popupType === 'subscribe'
? '#007bff'
: this.popupType === 'notification'
? '#4caf50'
: '#f44336';
}`

![alt text](images/118.png)

---

Scenario 124: Button background.

Description: Change the button background based on the type. For the notification.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'notification';

popupConfig: PopupConfig = this.getPopupConfig();

getButtonBackground(): string {
return this.popupType === 'subscribe'
? '#007bff'
: this.popupType === 'notification'
? '#4caf50'
: '#f44336';
}`

![alt text](images/119.png)

---

Scenario 125: Button background.

Description: Change the button background based on the type. For the freeForm.

Example:

`isPopupVisible = false;
buttonAlignment: string = 'right';

popupType: 'subscribe' | 'notification' | 'freeForm' = 'freeForm';

popupConfig: PopupConfig = this.getPopupConfig();

getButtonBackground(): string {
return this.popupType === 'subscribe'
? '#007bff'
: this.popupType === 'notification'
? '#4caf50'
: '#f44336';
}`

![alt text](images/120.png)

---
