import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormConfig, FormFieldConfig } from './form-modal';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { Subscription } from 'rxjs';
import { QuillModule } from 'ngx-quill';
import { CustomButtonComponent } from '../button-component/custom-button.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    QuillModule,
    CustomButtonComponent,
    NgxMatTimepickerModule,
  ],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css',
  providers: [provideNativeDateAdapter()],
})
export class FormComponentComponent
  implements OnInit, OnDestroy, AfterViewInit
{
  private readonly _currentYear = new Date().getFullYear();
  readonly minDate = new Date(this._currentYear - 20, 0, 1);
  readonly maxDate = new Date(this._currentYear + 1, 11, 31);

  selectedImages: string[] = [];
  selectedFileNames: string[] = [];

  form: FormGroup = new FormGroup({});

  @Input() formConfig!: FormConfig;

  private subscriptions: Subscription[] = [];

  @ViewChildren(MatDatepicker) datepickers!: QueryList<MatDatepicker<any>>;
  pickerRefs: MatDatepicker<any>[] = [];

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  formWidth = 60;

  rightSideImage = 'https://picsum.photos/id/238/900/600';

  updateFormWidth(width: number) {
    this.formWidth = Math.min(Math.max(width, 20), 80);
  }

  ngOnInit() {
    this.buildForm();
    this.subscribeToFormChanges();
  }

  ngAfterViewInit() {
    // Populate pickerRefs after the view is initialized
    this.pickerRefs = this.datepickers.toArray();
    this.cdr.detectChanges();
    window.addEventListener('scroll', this.closeDatepickerOnScroll, true);
  }

  closeDatepickerOnScroll = () => {
    this.pickerRefs.forEach((picker) => {
      if (picker.opened) {
        picker.close();
      }
    });
  };

  buildForm() {
    const formControls: { [key: string]: FormControl } = {};

    this.formConfig.fields.forEach((field) => {
      field.hide = field.hide ?? false;

      const controlValidators = [];
      if (field.required) {
        controlValidators.push(Validators.required);
      }
      if (field.validation?.minLength) {
        controlValidators.push(
          Validators.minLength(field.validation.minLength)
        );
      }
      if (field.validation?.maxLength) {
        controlValidators.push(
          Validators.maxLength(field.validation.maxLength)
        );
      }
      if (field.validation?.minValue) {
        controlValidators.push(Validators.min(field.validation.minValue));
      }
      if (field.validation?.maxValue) {
        controlValidators.push(Validators.max(field.validation.maxValue));
      }
      if (field.type === 'date') {
        controlValidators.push(
          this.dateRangeValidator(this.minDate, this.maxDate)
        );
      }

      if (
        field.type === 'time' &&
        field.validation?.minTime &&
        field.validation?.maxTime
      ) {
        controlValidators.push((control: AbstractControl) => {
          console.log(
            'field.validation?.maxTime: ',
            field?.validation?.maxTime
          );
          console.log('field.validation?.minTime: ', field.validation?.minTime);

          if (!control.value) return null;

          const selectedTime = control.value; // Direct time string (HH:mm)
          const minTime = field.validation?.minTime;
          const maxTime = field.validation?.maxTime;

          // Check if minTime and maxTime are defined
          if (!minTime || !maxTime) {
            return null;
          }

          return selectedTime < minTime
            ? { minTimeError: true }
            : selectedTime > maxTime
            ? { maxTimeError: true }
            : null;
        });
      }

      formControls[field.label] = this.fb.control(
        field.value || '',
        controlValidators
      );
    });

    this.form = this.fb.group(formControls);
  }

  // Handle checkbox change to show/hide fields
  toggleFieldVisibility(field: any) {
    field.hide = !field.hide;
    this.cdr.detectChanges();
  }

  // Subscribe to form value changes for real-time updates
  subscribeToFormChanges() {
    this.formConfig.fields.forEach((field) => {
      const control = this.form.get(field.label);
      if (control) {
        const sub = control.valueChanges.subscribe((value) => {
          console.log(`${field.label} changed: `, value);

          switch (field.type) {
            case 'text':
              if (
                field.validation?.maxLength &&
                value.length > field.validation.maxLength
              ) {
                console.warn(
                  `${field.label} exceeds maximum length of ${field.validation.maxLength}.`
                );
              }
              break;

            case 'number':
              if (field.validation) {
                if (
                  field.validation?.minValue !== undefined &&
                  value < field.validation.minValue
                ) {
                  console.warn(
                    `${field.label} is less than the minimum allowed value of ${field.validation.minValue}.`
                  );
                }
                if (
                  field.validation?.maxValue !== undefined &&
                  value > field.validation.maxValue
                ) {
                  console.warn(
                    `${field.label} exceeds the maximum allowed value of ${field.validation.maxValue}.`
                  );
                }
              }
              break;

            case 'date':
              if (value && new Date(value) > this.maxDate) {
                console.warn(`${field.label} cannot be a future date.`);
              }
              break;
            case 'time':
              if (field.validation?.minTime && field.validation?.maxTime) {
                const selectedTime = value;
                const minTime = field.validation.minTime;
                const maxTime = field.validation.maxTime;

                const convertToMinutes = (time: string) => {
                  const timeParts = time.match(
                    /^(\d{1,2}):(\d{2})(?:\s?(AM|PM))?$/
                  );
                  if (!timeParts) return 0;

                  let hours = parseInt(timeParts[1], 10);
                  const minutes = parseInt(timeParts[2], 10);
                  const period = timeParts[3];
                  if (period === 'PM' && hours < 12) {
                    hours += 12;
                  }
                  if (period === 'AM' && hours === 12) {
                    hours = 0;
                  }

                  return hours * 60 + minutes;
                };

                const selectedTimeInMinutes = convertToMinutes(selectedTime);
                const minTimeInMinutes = convertToMinutes(minTime);
                const maxTimeInMinutes = convertToMinutes(maxTime);

                if (
                  selectedTimeInMinutes < minTimeInMinutes ||
                  selectedTimeInMinutes > maxTimeInMinutes
                ) {
                  console.warn(
                    `${field.label} must be between ${minTime} and ${maxTime}.`
                  );
                  control.setErrors({ timeRangeError: true });
                } else {
                  console.log(`${field.label}: Valid time selected.`);
                  control.setErrors(null);
                }
              }
              break;

            case 'file':
              const files = control.value as (File | string)[];
              console.log('files: ', files);

              if (files && files.length) {
                for (let i = 0; i < files.length; i++) {
                  const file = files[i];
                  console.log('file: ', file);

                  if (typeof file === 'string' && file.startsWith('data:')) {
                    const match = file.match(
                      /^data:([a-zA-Z0-9-+\/]+);base64,/
                    );
                    let fileType = '';
                    if (match) {
                      fileType = match[1];
                    }
                    console.log('file.type (base64): ', fileType);
                    if (
                      field.fileConfig?.allowedTypes &&
                      !field.fileConfig.allowedTypes.includes(fileType)
                    ) {
                      console.warn(
                        `${field.label}: Invalid file type uploaded.`
                      );
                      control.setErrors({ invalidFileType: true });
                      break;
                    } else {
                      console.log(`${field.label}: Valid file type uploaded.`);
                    }
                  } else if (file instanceof File) {
                    const fileType = file.type;
                    console.log('file.type (File): ', fileType);
                    if (
                      field.fileConfig?.allowedTypes &&
                      !field.fileConfig.allowedTypes.includes(fileType)
                    ) {
                      console.warn(
                        `${field.label}: Invalid file type uploaded.`
                      );
                      control.setErrors({ invalidFileType: true });
                      break;
                    } else {
                      console.log(`${field.label}: Valid file type uploaded.`);
                    }
                  }
                }
              }
              break;

            case 'textarea':
              if (
                field.validation?.minLength &&
                value.length < field.validation.minLength
              ) {
                console.warn(
                  `${field.label} must be at least ${field.validation.minLength} characters long.`
                );
              }
              break;

            default:
              console.log(`${field.label}: No specific logic applied.`);
          }
        });
        this.subscriptions.push(sub);
      }
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log('Form is invalid. Please correct the following errors:');

      Object.keys(this.form.controls).forEach((key) => {
        const control = this.form.get(key);
        if (control?.invalid) {
          console.log(`Field: ${key}, Errors:`, control.errors);
        }
      });

      return;
    }

    console.log('Form is valid. Submitting data:', this.form.value);
  }

  // Validator function:
  dateRangeValidator(minDate: Date, maxDate: Date): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = new Date(control.value);
      if (selectedDate < minDate || selectedDate > maxDate) {
        return { dateRange: { valid: false } };
      }
      return null;
    };
  }

  //Error Messages
  getErrorMessage(field: FormFieldConfig) {
    const control = this.form.get(field.label);
    if (control?.hasError('required')) {
      return field.errorMessages?.required || `${field.label} is required.`;
    }
    if (control?.hasError('minlength')) {
      return (
        field.errorMessages?.minLength ||
        `${field.label} must be at least ${field.validation?.minLength} characters.`
      );
    }
    if (control?.hasError('maxlength')) {
      return (
        field.errorMessages?.maxLength ||
        `${field.label} cannot exceed ${field.validation?.maxLength} characters.`
      );
    }
    if (control?.hasError('min')) {
      return (
        field.errorMessages?.minValue ||
        `${field.label} must be at least ${field.validation?.minValue}.`
      );
    }
    if (control?.hasError('max')) {
      return (
        field.errorMessages?.maxValue ||
        `${field.label} must be at most ${field.validation?.maxValue}.`
      );
    }
    if (control?.hasError('pattern')) {
      return (
        field.errorMessages?.pattern || `Invalid format for ${field.label}.`
      );
    }

    if (control?.hasError('minTimeError')) {
      return (
        field.errorMessages?.minTime ||
        `Time cannot be earlier than ${field.validation?.minTime}.`
      );
    }

    if (control?.hasError('maxTimeError')) {
      return (
        field.errorMessages?.maxTime ||
        `Time cannot be later than ${field.validation?.maxTime}.`
      );
    }
    return `Invalid ${field.label}.`;
  }

  onFileSelect(event: Event, field: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.selectedImages = [];
      this.selectedFileNames = [];

      const files = Array.from(input.files);
      files.forEach((file) => {
        this.selectedFileNames.push(file.name);

        if (
          field.fileConfig.allowedTypes.includes(file.type) &&
          file.type.startsWith('image/')
        ) {
          const reader = new FileReader();
          reader.onload = () => {
            this.selectedImages.push(reader.result as string);
            this.form.get(field.label)?.setValue(this.selectedImages);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.closeDatepickerOnScroll, true);
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
