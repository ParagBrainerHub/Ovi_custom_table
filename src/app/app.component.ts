import { CustomMaterialTableComponent } from './custom-material-table/custom-material-table.component';
import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableConfig } from './custom-table/table-column.model';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ButtonConfig } from './button-component/button.model';
import { MasterComponent } from './master/master.component';
import { CardComponentComponent } from './card-collection-component/card-collection-component';
import { FormComponentComponent } from './form-component/form-component.component';
import { QuillModule } from 'ngx-quill';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormConfig } from './form-component/form-modal';
import { Subscription } from 'rxjs';
import { NavbarComponent } from './navbar/navbar.component';
import { NavBarConfig } from './navbar/navbar-modal';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardConfig } from './card-collection-component/card.modal';
import { FooterComponent } from './footer/footer.component';
import { FooterConfig } from './footer/footer.modal';
import { PopupComponent } from './popup/popup.component';
import { PopupConfig } from './popup/popup-modal';
import { CustomButtonComponent } from './button-component/custom-button.component';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { ThemeService } from './core/services/theme.service';
import { CarouselComponent } from './carousel/carousel.component';

interface ColumnItem {
  type: 'button' | 'image' | 'video' | 'text';
  content: any;
  config?: ButtonConfig;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  imageUrl?: string;
  videoUrl?: string;
  actions?: ButtonConfig[];
  contentItems?: { [columnKey: string]: ColumnItem[] };
  rowAlignments?: { [key: string]: 'left' | 'center' | 'right' };
  imageLoading?: boolean;
  videoLoading?: boolean;
  //byteArray?: number[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CustomTableComponent,
    CustomMaterialTableComponent,
    CommonModule,
    NgIf,
    NgxSkeletonLoaderModule,
    CardComponentComponent,
    FormComponentComponent,
    QuillModule,
    NavbarComponent,
    MatMenuModule,
    MatCardModule,
    MatSlideToggleModule,
    FooterComponent,
    PopupComponent,
    CustomButtonComponent,
    CalendarComponentComponent,
    RouterOutlet,
    CarouselComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  checked = true;
  disabled = false;
  themeService = inject(ThemeService);

  @Input() isGrid?: boolean;

  form: FormGroup = new FormGroup({});
  formConfig: FormConfig;

  private subscriptions: Subscription[] = [];

  editingRowIndex: number | null = null;

  loadingData: boolean = true;
  isNewTable: boolean = true;

  isDarkTheme!: boolean;

  // toggleTheme() {
  //   this.isDarkTheme = !this.isDarkTheme;
  //   this.applyTheme();
  // }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  applyTheme() {
    const root = document.documentElement;
    const body = document.body;
    if (this.isDarkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
    if (this.isDarkTheme) {
      root.style.setProperty('--primary-color', '#FFFFFF');
      root.style.setProperty('--secondary-color', '#7457EE');
      root.style.setProperty('--primary-border', '#FFFFFF');
      root.style.setProperty('--secondary-border', '#7457EE');
      root.style.setProperty('--primary-background-color', '#FFFFFF');
      root.style.setProperty('--secondary-background-color', '#7457EE');
      root.style.setProperty('--primary-text-color', '#333333');
      root.style.setProperty('--secondary-text-color', '#7457EE');
      root.style.setProperty('--white-text-color', '#FFFFFF');
    } else {
      root.style.setProperty('--primary-color', '#333333');
      root.style.setProperty('--secondary-color', '#800080');
      root.style.setProperty('--primary-border', '#333333');
      root.style.setProperty('--secondary-border', '#800080');
      root.style.setProperty('--primary-background-color', '#333333');
      root.style.setProperty('--secondary-background-color', '#800080');
      root.style.setProperty('--primary-text-color', '#333333');
      root.style.setProperty('--secondary-text-color', '#800080');
      root.style.setProperty('--white-text-color', '#FFFFFF');
    }
  }

  byteArray: any = [
    82, 73, 70, 70, 172, 179, 5, 0, 87, 69, 66, 80, 86, 80, 56, 32, 10, 37, 4,
    0, 80, 185, 8, 157, 1, 42, 0, 4, 0, 4, 62, 49, 20, 136, 67, 34, 33, 33, 21,
    28, 229, 240, 32, 3, 4, 179, 183, 107, 254, 11, 255, 226, 248, 104, 247, 59,
    237, 63, 169, 125, 150, 164, 127, 240, 249, 154, 255, 163, 233, 213, 172,
    255, 195, 136, 31, 232, 191, 246, 127, 150, 255, 89, 255, 255, 218, 87, 233,
    159, 228, 58, 14, 255, 165, 251, 125, 254, 143, 220, 71, 198,
  ];

  handleClick(event: Event): void {
    setTimeout(() => {
      alert('User Logged Out SuccessFully');
    }, 3000);
    console.log('Button clicked!', event);
  }

  //User Config
  users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      imageUrl: 'https://picsum.photos/200/300',
      // imageUrl: this.byteArray,
      imageLoading: true,
      actions: [
        {
          text: 'Edit',
          icon: '✏️',
          showIcon: true,
          iconPosition: 'left',
          onClick: this.editUser.bind(this),
        },
      ],
      rowAlignments: { name: 'center', email: 'right' },
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      imageUrl: 'https://picsum.photos/200/300',
      // imageUrl: this.byteArray,
      imageLoading: true,
      videoUrl: 'path-to-video.mp4',
      actions: [
        {
          text: 'Delete',
          icon: '❌',
          showIcon: true,
          iconPosition: 'left',
          onClick: this.deleteUser.bind(this),
        },
      ],
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      imageUrl: 'https://picsum.photos/200/300',
      // imageUrl: this.byteArray,
      videoLoading: true,
      videoUrl:
        'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
    },
    {
      id: 4,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Admin',
      imageUrl: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      imageUrl: 'https://picsum.photos/200/300',
    },
  ];

  //Table Config
  tableConfig: TableConfig = {
    isHeader: true,
    columns: [
      {
        key: 'name',
        title: 'Name',
        order: 1,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'email',
        title: 'Email',
        order: 2,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'role',
        title: 'User Role',
        order: 3,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'imageUrl',
        title: 'Profile Picture',
        order: 4,
        type: 'image',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
      {
        key: 'videoUrl',
        title: 'Profile Video',
        order: 5,
        type: 'video',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'left',
      },
    ],
    itemsPerPage: 5,
    maxItemsOptions: [5, 10, 15],
    // actions: [
    //   { text: 'Edit', icon: '✏️', showIcon: true, iconPosition: 'left', onClick: this.editUser.bind(this) },
    //   { text: 'Delete', icon: '❌', showIcon: true, iconPosition: 'left', onClick: this.deleteUser.bind(this) }
    // ],
    actions: [
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
        transparent: false,
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
        transparent: true,
      },
      {
        text: '',
        icon: '✅',
        showIcon: true,
        iconPosition: 'left',
        onClick: this.deleteUser.bind(this),
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
      },
    ],
    rowHeight: '50px',
    maxRowHeight: '200px',
    columnAlignments: {
      name: 'left',
      email: 'left',
      role: 'left',
      imageUrl: 'left',
      videoUrl: 'left',
    },
    filterAlignment: 'center',
    showFilter: true,
    filterWidth: '500px',
    margin: '20px',
    elementSpacing: '10px',
  };

  config: any;

  maxWidth = '500px';

  cardConfigs: CardConfig[] = [
    {
      //layout: 'grid',
      // width: 100,
      header: {
        title: 'It is a long established fact that a reader',
        align: 'center',
        buttonsAlign: 'left',
        buttons: [
          { text: 'Edit', align: 'left', icon: '✏️' },
          { text: 'Delete', align: 'right', icon: '✏️' },
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
            [
              { text: 'Detail 1', icon: '🔍' },
              { text: 'Detail 2', icon: '📅' },
            ],
            // [
            //   { text: 'Detail 3', icon: '💼' },
            //   { text: 'Detail 4', icon: '🌍' },
            // ],
          ],
        },
      },
      body: {
        type: 'text',
        align: 'center',
        content: `The Chihuahua is a Mexican breed of toy dog.`,
        buttons: [{ text: 'More Info', align: 'center' }],
      },
      footer: {
        type: 'buttons',
        align: 'left',
        text: 'This is a dynamically aligned footer text',
        buttons: [
          {
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
          { text: 'Cancel', align: 'left', group: 'left' },
          { text: 'Submit', align: 'right', group: 'right' },
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
        buttons: [
          { text: 'Edit', align: 'left', icon: '✏️' },
          { text: 'Delete', align: 'right', icon: '✏️' },
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
            [
              { text: 'Detail 1', icon: '🔍' },
              { text: 'Detail 2', icon: '📅' },
            ],
            [
              { text: 'Detail 3', icon: '💼' },
              { text: 'Detail 4', icon: '🌍' },
            ],
          ],
        },
      },
      body: {
        type: 'text',
        align: 'center',
        content: `The Chihuahua is a Mexican breed of toy dog.`,
        buttons: [{ text: 'More Info', align: 'center' }],
      },
      footer: {
        type: 'buttons',
        align: 'left',
        text: 'This is a dynamically aligned footer text',
        buttons: [
          {
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
          { text: 'Cancel', align: 'left', group: 'left' },
          { text: 'Submit', align: 'right', group: 'right' },
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
        buttons: [
          { text: 'Edit', align: 'left', icon: '✏️' },
          { text: 'Delete', align: 'right', icon: '✏️' },
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
            [
              { text: 'Detail 1', icon: '🔍' },
              { text: 'Detail 2', icon: '📅' },
            ],
            [
              { text: 'Detail 3', icon: '💼' },
              { text: 'Detail 4', icon: '🌍' },
            ],
          ],
        },
      },
      body: {
        type: 'text',
        align: 'center',
        content: `The Chihuahua is a Mexican breed of toy dog.`,
        buttons: [{ text: 'More Info', align: 'center' }],
      },
      footer: {
        type: 'buttons',
        align: 'left',
        text: 'This is a dynamically aligned footer text',
        buttons: [
          {
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
          { text: 'Cancel', align: 'left', group: 'left' },
          { text: 'Submit', align: 'right', group: 'right' },
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
        buttons: [
          { text: 'Edit', align: 'left', icon: '✏️' },
          { text: 'Delete', align: 'right', icon: '✏️' },
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
            [
              { text: 'Detail 1', icon: '🔍' },
              { text: 'Detail 2', icon: '📅' },
            ],
            [
              { text: 'Detail 3', icon: '💼' },
              { text: 'Detail 4', icon: '🌍' },
            ],
          ],
        },
      },
      body: {
        type: 'text',
        align: 'center',
        content: `The Chihuahua is a Mexican breed of toy dog.`,
        buttons: [{ text: 'More Info', align: 'center' }],
      },
      footer: {
        type: 'buttons',
        align: 'left',
        text: 'This is a dynamically aligned footer text',
        buttons: [
          {
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
          { text: 'Cancel', align: 'left', group: 'left' },
          { text: 'Submit', align: 'right', group: 'right' },
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
        buttons: [
          { text: 'Edit', align: 'left', icon: '✏️' },
          { text: 'Delete', align: 'right', icon: '✏️' },
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
            [
              { text: 'Detail 1', icon: '🔍' },
              { text: 'Detail 2', icon: '📅' },
            ],
            [
              { text: 'Detail 3', icon: '💼' },
              { text: 'Detail 4', icon: '🌍' },
            ],
          ],
        },
      },
      body: {
        type: 'text',
        align: 'center',
        content: `The Chihuahua is a Mexican breed of toy dog.`,
        buttons: [{ text: 'More Info', align: 'center' }],
      },
      footer: {
        type: 'buttons',
        align: 'left',
        text: 'This is a dynamically aligned footer text',
        buttons: [
          {
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
          { text: 'Cancel', align: 'left', group: 'left' },
          { text: 'Submit', align: 'right', group: 'right' },
        ],
      },
    },
  ];

  // card layout with toggle
  // onToggleChange(event: MatSlideToggleChange) {
  //   this.checked = event.checked;
  //   //this.cardConfig.layout = this.checked ? 'grid' : 'list'; // Update layout based on toggle
  //   this.cardConfigs.forEach(config => {
  //     config.layout = this.checked ? 'grid' : 'list';
  //   });
  // }

  //Form Config
  constructor(private fb: FormBuilder) {
    this.formConfig = {
      fields: [
        {
          type: 'text',
          label: 'Name',
          placeholder: 'Enter your name',
          required: true,
          validation: {
            minLength: 3,
            maxLength: 30,
          },
          style: {
            inlineStyles: { 'font-size': '16px', 'font-weight': 'bold' },
          },
          errorMessages: {
            required: 'Name is required.',
            minLength: 'Name must be at least 3 characters long.',
            maxLength: 'Name cannot exceed 30 characters.',
          },
          showCheckbox: true,
        },
        {
          type: 'number',
          label: 'Age',
          placeholder: 'Enter your age',
          validation: {
            minValue: 18,
            maxValue: 60,
            customErrorMessage: 'Age must be between 18 and 60.',
          },
          errorMessages: {
            required: 'Age is required.',
            minValue: 'Age must be at least 18.',
            maxValue: 'Age must be 60 or less.',
          },
          showCheckbox: true,
        },
        {
          type: 'date',
          label: 'Date of Birth',
          placeholder: 'Pick a date',
          required: true,
          showCheckbox: true,
        },
        {
          type: 'file',
          label: 'Picture',
          fileConfig: { allowedTypes: ['image/png'] },
          showCheckbox: true,
          buttonConfig: {
            text: 'Upload Image',
            icon: 'upload',
            showIcon: true,
            iconPosition: 'left',
            foreground: '#ffffff',
            background: '#1976d2',
            shadow: true,
            shape: 'rectangle',
            corners: 'rounded',
            transparent: false,
          },
        },
        {
          type: 'textarea',
          label: 'Bio',
          placeholder: 'Write your bio',
          textareaConfig: {
            rows: 5,
            toolbarOptions: [
              { type: 'bold' },
              { type: 'italic' },
              { type: 'underline' },
              { type: 'blockquote' },
              { type: 'code-block' },
            ],
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline'],
                ['blockquote', 'code-block'],
                [{ header: 1 }, { header: 2 }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],
                [{ size: ['small', false, 'large', 'huge'] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                ['clean'],
              ],
            },
          },
          validation: {
            minLength: 10,
            maxLength: 200,
            customErrorMessage: 'Bio must be between 10 and 200 characters.',
          },
          showCheckbox: true,
        },
      ],
      submitButtonConfig: {
        text: 'Submit',
        icon: 'send',
        showIcon: true,
        iconPosition: 'right',
        foreground: '#ffffff',
        background: '#1976d2',
        shadow: true,
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
      },
    };
  }

  //Nav Config
  navbarConfig: NavBarConfig = {
    isBorderTop: true,
    logo: {
      url: './light_cycolis_software_logo_2.png',
      position: 'left',
    },
    // title: {
    //   text: 'My Application',
    //   position: 'right',
    //   alignWithLogo: true,
    // },
    buttons: [
      {
        position: 'center',
        alignWithLogo: true,
        buttonsGroup: [
          {
            id: 'home',
            text: 'Home',
            // icon: 'home',
            // showIcon: true,
            // iconPosition: 'right',
            shape: 'rectangle',
            corners: 'rounded',
            foreground: '#ffffff',
            background: '#1976d2',
            transparent: true,
            border: false,
            shadow: false,
            navigate: true,
            url: '/',
          },
          {
            id: 'about',
            text: 'About Us',
            // icon: 'info',
            // showIcon: true,
            // iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foreground: '#ffffff',
            background: '#1976d2',
            transparent: true,
            border: false,
            shadow: false,
            navigate: true,
            url: '/about_us',
          },
          {
            id: 'blog',
            text: 'Blog',
            // icon: 'keyboard_arrow_up',
            // showIcon: true,
            // iconPosition: 'right',
            shape: 'rectangle',
            corners: 'rounded',
            foreground: '#ffffff',
            background: '#1976d2',
            transparent: true,
            border: false,
            shadow: false,
            navigate: true,
            url: '/blog',
            isMenuButton: true,
            menuItems: [
              {
                id: 'submenu1',
                text: 'Submenu 1',
                url: '/submenu1',
                icon: 'menu',
                showIcon: true,
                iconPosition: 'left',
                shape: 'rectangle',
                corners: 'rounded',
                foreground: '#ffffff',
                background: '#1976d2',
                transparent: true,
                border: false,
                shadow: false,
                navigate: true,
                menuItems: [
                  {
                    id: 'submenu3',
                    text: 'Submenu 3',
                    url: '/submenu3',
                    icon: 'home',
                    showIcon: true,
                    iconPosition: 'left', // Adding icon to the left of submenu 3
                    shape: 'rectangle',
                    corners: 'rounded',
                    foreground: '#ffffff',
                    background: '#1976d2',
                    transparent: true,
                    border: false,
                    shadow: false,
                    navigate: true,
                    menuItems: [
                      {
                        id: 'submenu3_1',
                        text: 'Submenu 3.1',
                        url: '/submenu3',
                      },
                      { id: 'submenu4', text: 'Submenu 3.2', url: '/submenu4' },
                      {
                        id: 'submenu5',
                        text: 'Submenu 5',
                        url: '/submenu5',
                        icon: 'settings',
                        showIcon: true,
                        iconPosition: 'left',
                      }, // Adding icon to the right of submenu 5
                      {
                        id: 'submenu6',
                        text: 'Submenu 6',
                        url: '/submenu6',
                        icon: 'info',
                        showIcon: true,
                        iconPosition: 'left',
                      }, // Adding icon to the left of submenu 6
                    ],
                  },
                  {
                    id: 'submenu4',
                    text: 'Submenu 4',
                    url: '/submenu4',
                    icon: 'check',
                    showIcon: true,
                    iconPosition: 'left',
                  }, // Adding icon to the right of submenu 4
                  {
                    id: 'submenu5',
                    text: 'Submenu 5',
                    url: '/submenu5',
                    icon: 'settings',
                    showIcon: true,
                    iconPosition: 'left',
                  },
                  {
                    id: 'submenu6',
                    text: 'Submenu 6',
                    url: '/submenu6',
                    icon: 'info',
                    showIcon: true,
                    iconPosition: 'left',
                  },
                ],
              },
              {
                id: 'submenu2',
                text: 'Submenu 2',
                url: '/submenu2',
                icon: 'help',
                showIcon: true,
                iconPosition: 'left',
              },
            ],
          },
          {
            id: 'contact',
            text: 'Contact Us',
            showIcon: false,
            shape: 'rectangle',
            corners: 'rounded',
            foreground: '#ffffff',
            background: '#ff5722',
            transparent: true,
            border: false,
            shadow: false,
            navigate: true,
            url: '/contact',
          },
          {
            id: 'logout',
            text: 'Logout',
            icon: '',
            showIcon: false,
            // iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foreground: '#ffffff',
            background: '#1976d2',
            transparent: true,
            border: true,
            shadow: false,
            navigate: true,
            url: '/logout',
            onClick: (event: Event) => this.handleClick(event),
          },
        ],
      },
    ],
  };

  carouselConfig = {
    images: [
      {
        src: '/corousel_image_5.jpg',
        title: 'Welcome To Norc.',
        highlightedText: 'Construction',
        description:
          'Our 25 years working experience make a different construction building. Viverra tristique usto duis vitae diam neque nivamus estan the atin viverra nectow drana setlie.',
        buttonText: 'Read More',
        badge: 'Architecture Design',
        badgeIcon: '/icon_logo_cycolis.png',
      },
      {
        src: '/corousel_image_2.avif',
        title: 'Innovative Solutions',
        highlightedText: 'For Your Business',
        description:
          'Our 25 years working experience make a different construction building. Viverra tristique usto duis vitae diam neque nivamus estan the atin viverra nectow drana setlie.',
        buttonText: 'Learn More',
        badge: 'Business Growth',
        badgeIcon: '/icon_logo_cycolis.png',
      },
    ],
    autoplay: true,
    loop: true,
    speed: 500,
  };

  footerConfig: FooterConfig = {
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

      {
        // lineText: 'Connect with us on social media.',
        title: 'About Us',
        description: 'Learn more about our company and team.',
        iconButtons: [
          { icon: 'Google', url: 'https://google.com' },
          { icon: 'facebook', url: 'https://facebook.com' },
        ],
      },
    ],
    // iframeUrl: 'https://example.com',
    // iframeWidth: '400',
    // iframeHeight: '300',
    bottomBar: {
      logoUrl: 'https://picsum.photos/id/237/600/300',
      copyrightText: 'All rights reserved.',
      year: 2024,
      company: 'My Company',
      backgroundColor: 'black',
      align: 'left',
      margin: '10px 10px',
      icons: [
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
          url: 'https://twitter.com',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
          url: 'https://facebook.com',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733558.png',
          url: 'https://instagram.com',
        },
        {
          icon: 'https://cdn-icons-png.flaticon.com/512/733/733609.png',
          url: 'https://github.com',
        },
      ],
    },
  };

  isPopupVisible = false;
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
  }

  getButtonBackground(): string {
    return this.popupType === 'subscribe'
      ? '#007bff'
      : this.popupType === 'notification'
      ? '#4caf50'
      : '#f44336';
  }

  closePopup(): void {
    this.isPopupVisible = false;
  }

  subscribeUser(): void {
    console.log('User subscribed with email!');
    this.closePopup();
  }

  submitForm(): void {
    console.log('Form submitted:', this.popupConfig.formFields);
    this.closePopup();
  }

  // openPopup() {
  //   this.isPopupVisible = true;
  // }

  editUser(user: User) {
    console.log('Editing user:', user);
  }

  deleteUser(user: User) {
    console.log('Deleting user:', user);
  }

  ngOnInit() {
    // Subscribe to theme changes from the service
    this.themeService.isDarkTheme$.subscribe((theme) => {
      this.isDarkTheme = theme;
      this.applyTheme(); // Apply the theme when it's updated
    });

    // Initialize the theme when the component is loaded
    this.isDarkTheme = this.themeService.isDarkThemeValue;
    this.applyTheme();
    this.loadUsers();
  }

  loadUsers() {
    this.users.forEach((user) => {
      user.imageLoading = true;
      user.videoLoading = true;
    });

    setTimeout(() => {
      this.loadingData = false;
      this.users.forEach((user) => {
        user.imageLoading = false;
        user.videoLoading = false;
      });
    }, 2000);
  }
}
