import { CustomMaterialTableComponent } from '../custom-material-table/custom-material-table.component';
import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ButtonConfig } from '../button-component/button.model';
import { MasterComponent } from '../master/master.component';
import { CardComponentComponent } from '../card-collection-component/card-collection-component';
import { FormComponentComponent } from '../form-component/form-component.component';
import { QuillModule } from 'ngx-quill';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormConfig } from '../form-component/form-modal';
import { Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavBarConfig } from '../navbar/navbar-modal';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  CardGridConfig,
  CardListConfig,
} from '../card-collection-component/card.modal';
import { FooterComponent } from '../footer/footer.component';
import { FooterConfig } from '../footer/footer.modal';
import { PopupComponent } from '../popup/popup.component';
import { PopupConfig } from '../popup/popup-modal';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { CalendarComponentComponent } from '../calendar-component/calendar-component.component';
import { ThemeService } from '../core/services/theme.service';
import { CarouselComponent } from '../carousel/carousel.component';
import { TableConfig } from '../custom-material-table/material-table-column.model';

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
  selector: 'app-home-page',
  standalone: true,
  imports: [
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
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  checked = true;
  disabled = false;
  themeService = inject(ThemeService);

  @Input() isGrid?: boolean;

  form: FormGroup = new FormGroup({});
  formConfig: FormConfig;
  formConfigForCalendar: FormConfig;
  formConfigForContact: FormConfig;
  formConfigForSubscribe: FormConfig;

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
      root.style.setProperty('--primary-color', '#800080');
      root.style.setProperty('--secondary-color', '#A44AA4');
      root.style.setProperty('--primary-border', '#800080');
      root.style.setProperty('--secondary-border', '#A44AA4');
      root.style.setProperty('--primary-background-color', '#800080');
      root.style.setProperty('--secondary-background-color', '#A44AA4');
      root.style.setProperty('--primary-text-color', '#800080');
      root.style.setProperty('--secondary-text-color', '#A44AA4');
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
    // setTimeout(() => {
    //   alert('User Logged Out SuccessFully');
    // }, 3000);
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

      rowAlignments: { name: 'center', email: 'right' },
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'User',
      imageUrl: 'https://picsum.photos/200/300',
      imageLoading: true,
      videoUrl: 'path-to-video.mp4',
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
    tableTitle: 'Custom Table By Parag',
    margin: '10px',
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
        alignment: 'center',
      },
      {
        key: 'role',
        title: 'User Role',
        order: 3,
        type: 'text',
        minWidth: '150px',
        maxWidth: '250px',
        alignment: 'right',
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
    currentPage: 1,
    maxItemsOptions: [5, 10, 15],
    actions: [
      {
        icon: 'edit',
        showIcon: true,
        iconPosition: 'left',
        onClick: this.editUser.bind(this),
        shape: 'square',
        hasBorder: false,
        corners: 'rounded',
        foregroundColor: '#fff',
        backgroundColor: '#800080',
        shadow: true,
        transparent: false,
      },
      {
        icon: 'delete',
        showIcon: true,
        iconPosition: 'right',
        onClick: this.deleteUser.bind(this),
        hasBorder: false,
        shape: 'square',
        corners: 'rounded',
        foregroundColor: '#ff0000',
        backgroundColor: '#black',
        borderColor: '2px solid red',
        shadow: false,
        transparent: true,
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
    elementSpacing: '10px',
  };

  config: any;
  cardGridConfig: CardGridConfig = {
    gridTitle: 'Our Services',
    gridTitleTag: 'h2',
    gridTitleStyles: {
      color: '#333',
      'font-size': '36px',
      'font-weight': 'bold',
      'text-align': 'center',
    },
    layoutType: 'grid',
    gridSubtitle: 'We offer scalable solutions for all businesses',
    gridSubtitleTag: 'p',
    gridSubtitleStyles: {
      color: '#666',
      'font-size': '18px',
      'text-align': 'center',
    },
    cardConfigs: [
      {
        // layout: 'list',
        // width: 100,
        // iframeUrl: 'https://www.example.com',
        // iframeWidth: '100%',
        // iframeHeight: '400px',
        imageAlignment: 'left', // or 'right'
        sectionWidths: [30, 70], // Image takes 40%, content takes 60%
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'It is a long established fact that a reader',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     // [
          //     //   { text: 'Detail 3', icon: '💼' },
          //     //   { text: 'Detail 4', icon: '🌍' },
          //     // ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          // align: 'center',
          content: `It is a long established fact that a reader`,
          // buttons: [{ text: 'More Info', align: 'center' }],
        },
        footer: {
          type: 'buttons',
          align: 'left',
          text: 'This is a dynamically aligned footer text',
          buttons: [
            {
              text: 'Edit',
              align: 'right',
              group: 'right',
              icon: 'edit',
              showIcon: true,
              iconPosition: 'right',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#576675',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'right',
              group: 'right',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'right',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#008000',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'right',
              group: 'right',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'right',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#DF0404',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     // [
          //     //   { text: 'Detail 3', icon: '💼' },
          //     //   { text: 'Detail 4', icon: '🌍' },
          //     // ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `It is a long established fact that a reader`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#576675',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#008000',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#DF0404',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     // [
          //     //   { text: 'Detail 3', icon: '💼' },
          //     //   { text: 'Detail 4', icon: '🌍' },
          //     // ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `It is a long established fact that a reader.`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#576675',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#008000',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#DF0404',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          //   customHtml: '<p>Custom HTML content here</p>',
          //   details: {
          //     align: 'multi-column',
          //     columns: 2,
          //     rows: 2,
          //     content: [
          //       [
          //         { text: 'Detail 1', icon: '🔍' },
          //         { text: 'Detail 2', icon: '📅' },
          //       ],
          //       [
          //         { text: 'Detail 3', icon: '💼' },
          //         { text: 'Detail 4', icon: '🌍' },
          //       ],
          //     ],
          //   },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `The Chihuahua is a Mexican breed of toy dog.`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     [
          //       { text: 'Detail 3', icon: '💼' },
          //       { text: 'Detail 4', icon: '🌍' },
          //     ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `The Chihuahua is a Mexican breed of toy dog.`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
    ],
  };

  cardListConfig: CardListConfig = {
    listTitle: 'Our Services',
    listTitleTag: 'h2',
    listTitleStyles: {
      color: '#333',
      'font-size': '36px',
      'font-weight': 'bold',
      'text-align': 'center',
    },
    layoutType: 'list',
    listSubtitle: 'We offer scalable solutions for all businesses',
    listSubtitleTag: 'p',
    listSubtitleStyles: {
      color: '#666',
      'font-size': '18px',
      'text-align': 'center',
    },
    cardConfigs: [
      {
        // layout: 'list',
        // width: 100,
        // iframeUrl: 'https://www.example.com',
        // iframeWidth: '100%',
        // iframeHeight: '400px',
        imageAlignment: 'left', // or 'right'
        sectionWidths: [30, 70], // Image takes 40%, content takes 60%
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'It is a long established fact that a reader',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     // [
          //     //   { text: 'Detail 3', icon: '💼' },
          //     //   { text: 'Detail 4', icon: '🌍' },
          //     // ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          // align: 'center',
          content: `It is a long established fact that a reader`,
          // buttons: [{ text: 'More Info', align: 'center' }],
        },
        footer: {
          type: 'buttons',
          align: 'left',
          text: 'This is a dynamically aligned footer text',
          buttons: [
            {
              text: 'Edit',
              align: 'right',
              group: 'right',
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#576675',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'right',
              group: 'right',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#008000',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'right',
              group: 'right',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#DF0404',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     // [
          //     //   { text: 'Detail 3', icon: '💼' },
          //     //   { text: 'Detail 4', icon: '🌍' },
          //     // ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `It is a long established fact that a reader`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#576675',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#008000',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#DF0404',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     // [
          //     //   { text: 'Detail 3', icon: '💼' },
          //     //   { text: 'Detail 4', icon: '🌍' },
          //     // ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `It is a long established fact that a reader.`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#576675',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#008000',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#DF0404',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          //   customHtml: '<p>Custom HTML content here</p>',
          //   details: {
          //     align: 'multi-column',
          //     columns: 2,
          //     rows: 2,
          //     content: [
          //       [
          //         { text: 'Detail 1', icon: '🔍' },
          //         { text: 'Detail 2', icon: '📅' },
          //       ],
          //       [
          //         { text: 'Detail 3', icon: '💼' },
          //         { text: 'Detail 4', icon: '🌍' },
          //       ],
          //     ],
          //   },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `The Chihuahua is a Mexican breed of toy dog.`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
      {
        // layout: 'list', //Use the list layout
        // width: 100,
        cardActions: [
          { icon: 'schedule', text: '1 day ago' },
          { icon: 'comment', text: '3 COMMENTS' },
          { icon: 'favorite', text: '1 LIKE' },
        ],
        // header: {
        //   title: 'Chihuahua 2',
        //   // align: 'center',
        //   buttonsAlign: 'left',
        //   buttons: [
        //     { text: 'Edit', align: 'left', icon: '✏️', hasBorder: false },
        //     { text: 'Delete', align: 'right', icon: '✏️', hasBorder: false },
        //   ],
        // },
        image: {
          position: 'top-half',
          src: 'https://media.istockphoto.com/id/1934523700/photo/close-up-on-man-hand-using-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=8rb1PLOQMgOY52356fBOBjWfVknpGT-uxfeJk_h3ols=',
          title: 'Title on Image',
          description: 'This is a description shown on hover.',
          hoverEffect: false,
        },
        content: {
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          // customHtml: '<p>Custom HTML content here</p>',
          // details: {
          //   align: 'multi-column',
          //   columns: 2,
          //   rows: 2,
          //   content: [
          //     [
          //       { text: 'Detail 1', icon: '🔍' },
          //       { text: 'Detail 2', icon: '📅' },
          //     ],
          //     [
          //       { text: 'Detail 3', icon: '💼' },
          //       { text: 'Detail 4', icon: '🌍' },
          //     ],
          //   ],
          // },
        },
        body: {
          type: 'text',
          align: 'left',
          content: `The Chihuahua is a Mexican breed of toy dog.`,
          buttons: [{ text: 'More Info', align: 'center', hasBorder: false }],
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
              icon: 'edit',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Done',
              align: 'left',
              group: 'left',
              icon: 'check_circle',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
            {
              text: 'Delete',
              align: 'left',
              group: 'left',
              icon: 'delete',
              showIcon: true,
              iconPosition: 'left',
              shape: 'square',
              corners: 'rounded',
              foregroundColor: '#ffffff',
              backgroundColor: '#800080',
              hasBorder: false,
              shadow: true,
              transparent: false,
            },
          ],
        },
      },
    ],
  };

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
      formTitle: 'Get a Quote Now',
      formSubTitle: 'Get a Quote Immediately Upon Form Submission',
      isImageShow: true,
      formWidth: 60,
      fields: [
        {
          type: 'text',
          label: 'Name',
          key: 'name',
          placeholder: 'Enter your name',
          width: '45%',
          required: true,
          validation: {
            minLength: 3,
            maxLength: 30,
          },
          style: {
            inlineStyles: {
              'font-size': '16px',
              'font-weight': 'bold',
              // 'min-width': '80%',
            },
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
          key: 'age',
          placeholder: 'Enter your age',
          width: '45%',
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
          key: 'dob',
          placeholder: 'Pick a date',
          width: '45%',
          required: true,
          showCheckbox: true,
        },
        {
          type: 'time',
          label: 'Select Time',
          key: 'time',
          placeholder: 'Pick a time',
          width: '45%',
          required: true,
          validation: {
            minTime: '08:00',
            maxTime: '18:00',
            customErrorMessage: 'Time must be between 08:00 and 18:00.',
          },
          errorMessages: {
            required: 'Time is required.',
            minTime: 'Time cannot be earlier than 08:00 AM.',
            maxTime: 'Time cannot be later than 06:00 PM.',
          },
          showCheckbox: true,
        },
        {
          type: 'switch',
          key: 'notifications',
          label: 'Enable Notifications',
          width: '45%',
          defaultValue: false,
          showCheckbox: true,
        },
        {
          type: 'select',
          label: 'Country',
          key: 'country',
          width: '45%',
          placeholder: 'Select a country',
          options: [
            { key: 'india', label: 'India', value: 'IN' },
            { key: 'united_states', label: 'United States', value: 'US' },
            { key: 'canada', label: 'Canada', value: 'CA' },
          ],
          required: true,
          errorMessages: {
            required: 'Country selection is required.',
          },
          showCheckbox: true,
        },
        {
          type: 'radio',
          label: 'Gender',
          key: 'gender',
          width: '100%',
          options: [
            { key: 'male', label: 'Male', value: 'male' },
            { key: 'female', label: 'Female', value: 'female' },
            { key: 'other', label: 'Other', value: 'other' },
          ],
          required: true,
          errorMessages: {
            required: 'Gender is required.',
          },
          showCheckbox: true,
        },
        {
          type: 'checkbox',
          label: 'Hobbies',
          key: 'hobbies',
          width: '100%',
          value: [],
          options: [
            { key: 'reading', label: 'Reading', value: 'reading' },
            { key: 'traveling', label: 'traveling', value: 'traveling' },
            { key: 'music', label: 'music', value: 'music' },
          ],
          required: true,
          errorMessages: {
            required: 'Select at least one hobby.',
          },
          showCheckbox: true,
        },

        // {
        //   type: 'file',
        //   label: 'Picture',
        //   width: 150,
        //   showFileIcon: false,
        //   fileConfig: {
        //     allowedTypes: ['image/png', 'image/jpeg', 'image/gif'],
        //   },
        //   showCheckbox: true,
        //   buttonConfig: {
        //     text: 'Upload Image',
        //     icon: 'upload',
        //     showIcon: true,
        //     iconPosition: 'left',
        //     foreground: '#ffffff',
        //     background: '#800080',
        //     shadow: true,
        //     shape: 'rectangle',
        //     corners: 'rounded',
        //     transparent: false,
        //   },
        // },

        // {
        //   type: 'textarea',
        //   label: 'Bio',
        //   placeholder: 'Write your bio',
        //   width: 600,
        //   textareaConfig: {
        //     rows: 5,
        //     toolbarOptions: [
        //       { type: 'bold' },
        //       { type: 'italic' },
        //       { type: 'underline' },
        //       { type: 'blockquote' },
        //       { type: 'code-block' },
        //     ],
        //     modules: {
        //       toolbar: [
        //         ['bold', 'italic', 'underline'],
        //         ['blockquote', 'code-block'],
        //         [{ header: 1 }, { header: 2 }],
        //         [{ list: 'ordered' }, { list: 'bullet' }],
        //         [{ script: 'sub' }, { script: 'super' }],
        //         [{ indent: '-1' }, { indent: '+1' }],
        //         [{ direction: 'rtl' }],
        //         [{ size: ['small', false, 'large', 'huge'] }],
        //         [{ header: [1, 2, 3, 4, 5, 6, false] }],
        //         [{ color: [] }, { background: [] }],
        //         [{ font: [] }],
        //         [{ align: [] }],
        //         ['clean'],
        //       ],
        //     },
        //   },
        //   validation: {
        //     minLength: 10,
        //     maxLength: 200,
        //     customErrorMessage: 'Bio must be between 10 and 200 characters.',
        //   },
        //   showCheckbox: true,
        // },
      ],
      submitButtonConfig: {
        text: 'Submit',
        icon: 'send',
        showIcon: true,
        iconPosition: 'right',
        width: '100%',
        hasBorder: false,
        foregroundColor: '#ffffff',
        backgroundColor: '#800080',
        shadow: true,
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
      },
    };

    this.formConfigForCalendar = {
      formTitle: 'Book Slot',
      formSubTitle: '',
      isImageShow: false,
      formWidth: 100,
      fields: [
        {
          type: 'select',
          label: 'Start Time',
          key: 'startTime',
          placeholder: 'Select start time',
          width: 300,
          required: true,
          options: [
            // { label: '08:00 AM', value: '08:00' },
            // { label: '09:00 AM', value: '09:00' },
            // { label: '10:00 AM', value: '10:00' },
            // { label: '11:00 AM', value: '11:00' },
            // { label: '12:00 PM', value: '12:00' },
            // { label: '01:00 PM', value: '13:00' },
            // { label: '02:00 PM', value: '14:00' },
            // { label: '03:00 PM', value: '15:00' },
            // { label: '04:00 PM', value: '16:00' },
            // { label: '05:00 PM', value: '17:00' },
          ],
          errorMessages: {
            required: 'Start Time is required.',
          },
          showCheckbox: true,
        },
        {
          type: 'select',
          label: 'Duration',
          key: 'duration',
          placeholder: 'Select duration',
          width: 300,
          required: true,
          options: [
            // { label: '10 minutes', value: 10 },
            // { label: '30 minutes', value: 30 },
            // { label: '1 hour', value: 60 },
            // { label: '2 hours', value: 120 },
          ],
          errorMessages: {
            required: 'Duration is required.',
          },
          showCheckbox: true,
        },
        {
          type: 'text',
          label: 'Placeholder',
          key: 'placeholder',
          placeholder: 'Enter placeholder text',
          width: 300,
          required: true,
          validation: {
            minLength: 3,
            maxLength: 50,
          },
          errorMessages: {
            required: 'Placeholder is required.',
            minLength: 'Placeholder must be at least 3 characters.',
            maxLength: 'Placeholder cannot exceed 50 characters.',
          },
          showCheckbox: true,
        },
        {
          type: 'text',
          label: 'Name',
          key: 'name',
          placeholder: 'Enter your name',
          width: 300,
          required: true,
          validation: {
            minLength: 3,
            maxLength: 30,
          },
          style: {
            inlineStyles: {
              'font-size': '16px',
              'font-weight': 'bold',
              'min-width': '80%',
            },
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
          key: 'age',
          placeholder: 'Enter your age',
          width: 300,
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
          key: 'dob',
          placeholder: 'Pick a date',
          width: 300,
          required: true,
          showCheckbox: true,
        },
        {
          type: 'time',
          label: 'Select Time',
          key: 'time',
          placeholder: 'Pick a time',
          width: 300,
          required: true,
          validation: {
            minTime: '08:00',
            maxTime: '18:00',
            customErrorMessage: 'Time must be between 08:00 and 18:00.',
          },
          errorMessages: {
            required: 'Time is required.',
            minTime: 'Time cannot be earlier than 08:00 AM.',
            maxTime: 'Time cannot be later than 06:00 PM.',
          },
          showCheckbox: true,
        },
        {
          type: 'switch',
          label: 'Enable Notifications',
          key: 'notifications',
          width: 300,
          defaultValue: false,
          showCheckbox: true,
        },
        {
          type: 'select',
          key: 'country',
          label: 'Country',
          width: 300,
          placeholder: 'Select a country',
          options: [
            { key: 'india', label: 'India', value: 'IN' },
            { key: 'united_states', label: 'United States', value: 'US' },
            { key: 'canada', label: 'Canada', value: 'CA' },
          ],
          required: true,
          errorMessages: {
            required: 'Country selection is required.',
          },
          showCheckbox: true,
        },
        {
          type: 'radio',
          label: 'Gender',
          key: 'gender',
          width: 500,
          options: [
            { key: 'male', label: 'Male', value: 'male' },
            { key: 'female', label: 'Female', value: 'female' },
            { key: 'other', label: 'Other', value: 'other' },
          ],
          required: true,
          errorMessages: {
            required: 'Gender is required.',
          },
          showCheckbox: true,
        },
        {
          type: 'checkbox',
          label: 'Hobbies',
          key: 'hobbies',
          width: 600,
          value: [],
          options: [
            { key: 'reading', label: 'Reading', value: 'reading' },
            { key: 'traveling', label: 'traveling', value: 'traveling' },
            { key: 'music', label: 'music', value: 'music' },
          ],
          required: true,
          errorMessages: {
            required: 'Select at least one hobby.',
          },
          showCheckbox: true,
        },
      ],
      submitButtonConfig: {
        text: 'Submit',
        icon: 'send',
        showIcon: true,
        iconPosition: 'right',
        hasBorder: false,
        foregroundColor: '#ffffff',
        backgroundColor: '#800080',
        shadow: true,
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
      },
      cancelButtonConfig: {
        text: 'cancel',
        icon: 'cancel',
        showIcon: true,
        hasBorder: false,
        iconPosition: 'right',
        foregroundColor: '#ffffff',
        backgroundColor: '#800080',
        shadow: true,
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
      },
    };

    this.formConfigForContact = {
      formTitle: 'Contact Us',
      formSubTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      isImageShow: false,
      formWidth: 100,
      backgroundColor: 'transparent',
      fields: [
        {
          type: 'text',
          label: 'First Name',
          key: 'firstName',
          placeholder: 'Enter your first name',
          // width: 260,
          required: true,
          validation: {
            minLength: 2,
            maxLength: 30,
          },
          errorMessages: {
            required: 'First name is required.',
            minLength: 'First name must be at least 2 characters long.',
            maxLength: 'First name cannot exceed 30 characters.',
          },
        },
        {
          type: 'text',
          label: 'Last Name',
          key: 'lastName',
          placeholder: 'Enter your last name',
          // width: 260,
          required: true,
          validation: {
            minLength: 2,
            maxLength: 30,
          },
          errorMessages: {
            required: 'Last name is required.',
            minLength: 'Last name must be at least 2 characters long.',
            maxLength: 'Last name cannot exceed 30 characters.',
          },
        },
        {
          type: 'email',
          label: 'Email',
          key: 'email',
          placeholder: 'Enter your email',
          // width: 260,
          required: true,
          validation: {
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          },
          errorMessages: {
            required: 'Email is required.',
            pattern: 'Enter a valid email address.',
          },
        },
        {
          type: 'number',
          label: 'Phone',
          key: 'phone',
          placeholder: 'Enter your phone number',
          // width: 260,
          validation: {
            minLength: 10,
            maxLength: 15,
          },
          errorMessages: {
            minLength: 'Phone number must be at least 10 digits.',
            maxLength: 'Phone number cannot exceed 15 digits.',
          },
        },
        {
          type: 'textarea',
          label: 'Message',
          key: 'message',
          placeholder: 'Enter your message',
          width: '100%',
          textareaConfig: {
            rows: 5,
            toolbarOptions: [
              { type: 'bold' },
              { type: 'italic' },
              { type: 'underline' },
              { type: 'strike' },
              { type: 'color' },
              { type: 'background' },
              { type: 'blockquote' },
              { type: 'code-block' },
              { type: 'header', value: 1 },
              { type: 'list', value: 'ordered' },
              { type: 'list', value: 'bullet' },
              { type: 'script', value: 'sub' },
              { type: 'script', value: 'super' },
              { type: 'indent', value: '-1' },
              { type: 'indent', value: '+1' },
              { type: 'direction', value: 'rtl' },
              { type: 'size', value: 'large' },
              { type: 'font' },
              { type: 'align' },
              { type: 'link' },
              { type: 'image' },
              { type: 'video' },
              { type: 'clean' },
            ],
            modules: {
              toolbar: [
                ['bold', 'italic', 'underline', 'strike'],
                [{ color: [] }, { background: [] }],
                ['blockquote', 'code-block'],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ list: 'ordered' }, { list: 'bullet' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ direction: 'rtl' }],
                [{ size: ['small', false, 'large', 'huge'] }],
                [{ font: [] }],
                [{ align: [] }],
                ['link', 'image', 'video'],
                ['clean'],
              ],
            },
          },
        },
      ],
      submitButtonConfig: {
        text: 'Contact Us',
        icon: 'send',
        showIcon: true,
        hasBorder: false,
        iconPosition: 'right',
        foregroundColor: '#ffffff',
        backgroundColor: '#800080',
        shadow: true,
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
        width: '100%',
      },
    };

    this.formConfigForSubscribe = {
      formTitle: 'Subscribe To Our Newsletter',
      formSubTitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      isImageShow: false,
      formWidth: 100,
      backgroundColor: 'transparent',
      fields: [
        {
          type: 'email',
          label: 'Email',
          key: 'email',
          placeholder: 'Enter your email',
          width: '100%',
          required: true,
          validation: {
            pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$',
          },
          errorMessages: {
            required: 'Email is required.',
            pattern: 'Enter a valid email address.',
          },
        },
      ],
      submitButtonConfig: {
        text: 'Subscribe',
        icon: 'send',
        showIcon: true,
        hasBorder: false,
        iconPosition: 'right',
        foregroundColor: '#ffffff',
        backgroundColor: '#800080',
        shadow: true,
        shape: 'rectangle',
        corners: 'rounded',
        transparent: false,
        width: '100%',
      },
    };
  }

  //Nav Config
  navbarConfig: NavBarConfig = {
    isBorderTop: true,
    style: {
      width: '100vw',
      maxWidth: '100%',
      backgroundColor: '#fcfcfc',
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
      position: 'sticky',
      top: '0',
      zIndex: '500',
      padding: '12px 250px',
    },
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
            foregroundColor: '#333333',
            backgroundColor: '#800080',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/',
          },
          {
            id: 'services',
            text: 'Services',
            // icon: 'info',
            // showIcon: true,
            // iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: 'var(--primary-color)',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/microservices-page',
          },
          {
            id: 'blog',
            text: 'Blog',
            // icon: 'keyboard_arrow_up',
            // showIcon: true,
            // iconPosition: 'right',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: '#800080',
            transparent: true,
            hasBorder: false,
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
                foregroundColor: '#333333',
                backgroundColor: '#800080',
                transparent: true,
                hasBorder: false,
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
                    foregroundColor: '#333333',
                    backgroundColor: '#800080',
                    transparent: true,
                    hasBorder: false,
                    shadow: false,
                    navigate: true,
                    menuItems: [
                      {
                        id: 'submenu3_1',
                        text: 'Submenu 3.1',
                        hasBorder: false,
                        url: '/submenu3',
                      },
                      {
                        id: 'submenu4',
                        text: 'Submenu 3.2',
                        url: '/submenu4',
                        hasBorder: false,
                      },
                      {
                        id: 'submenu5',
                        text: 'Submenu 5',
                        url: '/submenu5',
                        icon: 'settings',
                        showIcon: true,
                        iconPosition: 'left',
                        hasBorder: false,
                      }, // Adding icon to the right of submenu 5
                      {
                        id: 'submenu6',
                        text: 'Submenu 6',
                        url: '/submenu6',
                        icon: 'info',
                        showIcon: true,
                        iconPosition: 'left',
                        hasBorder: false,
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
                    hasBorder: false,
                  }, // Adding icon to the right of submenu 4
                  {
                    id: 'submenu5',
                    text: 'Submenu 5',
                    url: '/submenu5',
                    icon: 'settings',
                    showIcon: true,
                    iconPosition: 'left',
                    hasBorder: false,
                  },
                  {
                    id: 'submenu6',
                    text: 'Submenu 6',
                    url: '/submenu6',
                    icon: 'info',
                    showIcon: true,
                    iconPosition: 'left',
                    hasBorder: false,
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
                hasBorder: false,
              },
            ],
          },
          {
            id: 'contact',
            text: 'Contact Us',
            showIcon: false,
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: '#333333',
            backgroundColor: '#800080',
            transparent: true,
            hasBorder: false,
            shadow: false,
            navigate: true,
            url: '/contact',
          },
          {
            id: 'login',
            text: 'Login',
            icon: '',
            showIcon: false,
            // iconPosition: 'left',
            shape: 'rectangle',
            corners: 'rounded',
            foregroundColor: 'var(--primary-text-color)',
            transparent: true,
            hasBorder: true,
            borderColor: 'var(--primary-text-color)',
            shadow: false,
            navigate: true,
            url: '/login',
            onClick: (event: Event) => this.handleClick(event),
          },
        ],
      },
    ],
  };

  carouselConfig: any = {
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
        src: '/corousel_image_4.avif',
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
    isSubscribeShow: true,
    subscribeText: 'Subscribe to our newsletter',
    subscribeDesc:
      'Be the first one to know about discounts, offers and events',
    subscribeButton: 'Subscribe',
    contactusButton: 'Contact Us',

    logoUrl: './light_cycolis_software_logo_2.png',
    description:
      'OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America',

    usefulLinks: [
      { name: 'Home', url: '/home' },
      { name: 'About Us', url: '/about' },
      { name: 'Blog', url: '/blog' },
      { name: 'Contact Us', url: '/contact' },
    ],

    contact: {
      address: 'Neha Tobacco, Banda, Madhya Pradesh, India',
      email: 'iesparagjain@gmail.com',
      phone: '+91 9770525851',
    },

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
      backgroundColor: 'transparent',
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

  //   footerConfig = {
  //   subscribeText: 'Subscribe to our newsletter',
  //   subscribeDesc: 'Be the first one to know about discounts, offers and events',
  //   subscribeButton: 'Subscribe',

  //   logo: 'assets/logo.png',
  //   description: 'OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America',

  //   usefulLinks: [
  //     { name: 'Home', url: '/home' },
  //     { name: 'About Us', url: '/about' },
  //     { name: 'Blog', url: '/blog' },
  //     { name: 'Contact Us', url: '/contact' },
  //   ],

  //   contact: {
  //     address: '8819 Ohio St. South Gate, CA 90280',
  //     email: 'Ourstudio@hello.com',
  //     phone: '+1 386-688-3295'
  //   },

  //   socialIcons: [
  //     { icon: 'fa-twitter', url: 'https://twitter.com' },
  //     { icon: 'fa-facebook', url: 'https://facebook.com' },
  //     { icon: 'fa-instagram', url: 'https://instagram.com' },
  //     { icon: 'fa-github', url: 'https://github.com' },
  //   ],

  //   copyright: '© Copyright 2024, All Rights Reserved'
  // };

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
    this.closePopup();
  }

  submitForm(): void {
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
