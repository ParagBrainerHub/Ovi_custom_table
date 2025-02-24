import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
  FormArray,
  FormControl,
} from '@angular/forms';
import { CommonModule, DatePipe, JsonPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { v4 as uuidv4 } from 'uuid';
import { FormComponentComponent } from '../form-component/form-component.component';
// interface Booking {
//   id?: string;
//   date: Date;
//   startTime: string;
//   duration: number;
//   placeholder: string;
//   customerName?: string;
//   attribute2?: string;
// }

@Component({
  selector: 'app-calendar-component',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormComponentComponent,
  ],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.css',
})
export class CalendarComponentComponent implements OnInit, AfterViewInit {
  @ViewChild(FormComponentComponent) formComponent!: FormComponentComponent;
  @Input() formConfig: any;
  currentView: 'month' | 'week' = 'month';
  currentDate: Date = new Date();
  bookings: any[] = [];
  selectedSlot: any = null;
  slotSelected = {};
  isSlotSelected: boolean = false;
  bookingForm: FormGroup;
  monthGrid: { date: Date; bookings: any[] }[][] = [];
  slotsGrid: any[] = [];
  expandDayBookingModal: boolean = false;
  currentWeekStart: Date = new Date();
  currentWeekEnd: Date = new Date();
  weekDays: {
    date: Date;
    timeSlots: { time: string; booking: any | null; disabled: boolean }[];
  }[] = [];
  timeSlots: string[] = [];
  availableTimeSlots: { time: string; status: string }[] = [];
  selectedDayBookings: { date: Date | null; bookings: any[] } = {
    date: null,
    bookings: [],
  };
  availableDurations: number[] = [];
  isDurationDisabled: boolean = false;

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      duration: ['', [Validators.required]],
      placeholder: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    console.log('this.formConfig12312343124: ', this.formConfig);
    this.generateMonthView();
  }

  ngAfterViewInit() {
    console.log('formComponent initialized:', this.formComponent);

    setTimeout(() => {
      if (this.formComponent && this.formComponent.form) {
        this.formComponent.form.get('date')?.disable();
        console.log('Date field disabled');
      }
    });
  }

  onFormSubmit(data: any) {
    console.log('formComponent: ', this.formComponent);
    console.log('Form Submitted:', data);
    this.bookSlot(data);
  }

  onFormCancel() {
    this.selectedSlot = null;
    this.isSlotSelected = false;
  }

  selectAndPatch(booking: any) {
    console.log('booking: ', booking);
    this.isSlotSelected = true;

    setTimeout(() => {
      if (!this.formComponent) {
        console.error('formComponent is still undefined!');
        return;
      }

      this.isSlotBooked(booking.date, booking.startTime);
      this.availableTimeSlots = this.getAvailableSlots(booking.date);

      // ✅ "Start Time" field ke options update karo
      this.formConfig.fields.find(
        (field: any) => field.label === 'Start Time'
      ).options = this.availableTimeSlots.map((slot) => ({
        label: slot.time,
        value: slot.time,
        status: slot.status,
      }));

      this.formComponent.form.patchValue({
        ...booking,
        id: booking.id,
      });

      // ✅ Checkbox handling for "Hobbies"
      const checkboxFieldName = 'hobbies';
      const checkboxArray = this.formComponent.form.get(
        checkboxFieldName
      ) as FormArray;

      if (checkboxArray) {
        checkboxArray.clear();

        if (Array.isArray(booking[checkboxFieldName])) {
          booking[checkboxFieldName].forEach((value: any) => {
            checkboxArray.push(new FormControl(value));
          });
        }
      }

      this.selectedSlot = booking;
    });
  }

  handleDropdownChange(data: { key: string; value: any }) {
    console.log('Dropdown changed:', data);

    if (data.key === 'startTime') {
      this.onTimeSlotChange(data.value);

      // ✅ "Duration" field ke options update karo
      this.availableDurations = this.getAvailableDurations(data.value);
      console.log('this.availableDurations: ', this.availableDurations);
      this.formConfig.fields.find(
        (field: any) => field.key === 'duration'
      ).options = this.availableDurations.map((duration) => ({
        label: `${duration} minutes`,
        value: duration,
      }));

      console.log('this.availableDurations: ', this.availableDurations);
    }
  }

  toSafeKey(label: string): string {
    return label.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
  }

  generateMonthView() {
    this.generateTimeSlots();
    console.log(this.currentDate, 'this.currentDate');

    const firstDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    );

    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    const endDate = new Date(lastDayOfMonth);
    endDate.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

    const grid: { date: Date; bookings: any[]; timeSlots: any[] }[][] = [];
    let currentWeek: { date: Date; bookings: any[]; timeSlots: any[] }[] = [];

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const bookingsForDay = this.bookings.filter((booking) =>
        this.isSameDate(booking.date, date)
      );

      const timeSlots = this.timeSlots.map((time) => {
        const booking = bookingsForDay.find((b) => b.startTime === time);
        return { time, booking: booking || null };
      });

      currentWeek.push({
        date: new Date(date),
        bookings: bookingsForDay,
        timeSlots,
      });

      if (currentWeek.length === 7) {
        grid.push(currentWeek);
        currentWeek = [];
      }
    }

    console.log('grid: ', grid);
    this.monthGrid = grid;
  }

  navigatePreviousMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() - 1,
      1
    );
    this.generateMonthView();
  }

  navigateNextMonth() {
    this.currentDate = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      1
    );
    this.generateMonthView();
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  getDayNames(): string[] {
    return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  }

  isCurrentMonth(date: Date): boolean {
    return (
      date.getMonth() === this.currentDate.getMonth() &&
      date.getFullYear() === this.currentDate.getFullYear()
    );
  }

  generateWeekView() {
    this.generateTimeSlots();
    const startOfWeek = new Date(this.currentDate);
    startOfWeek.setDate(this.currentDate.getDate() - this.currentDate.getDay());
    this.currentWeekStart = new Date(startOfWeek);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    this.currentWeekEnd = new Date(endOfWeek);

    this.weekDays = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);

      const bookingsForDay = this.bookings.filter((b) =>
        this.isSameDate(b.date, day)
      );

      const timeSlots = this.timeSlots.map((time) => {
        const booking = bookingsForDay.find((b) => b.startTime === time);
        return { time, booking: booking || null, disabled: false };
      });

      this.weekDays.push({ date: day, timeSlots });
      this.disablePastSlots();
    }
  }

  navigatePreviousWeek() {
    this.currentDate.setDate(this.currentDate.getDate() - 7);
    this.generateWeekView();
  }

  navigateNextWeek() {
    this.currentDate.setDate(this.currentDate.getDate() + 7);
    this.generateWeekView();
  }

  switchView(view: 'month' | 'week') {
    this.currentView = view;
    if (view === 'month') {
      this.generateMonthView();
    } else {
      this.currentDate = new Date();
      this.generateWeekView();
    }
  }

  getAvailableSlots(date: Date) {
    const isToday = this.isSameDate(date, new Date());
    const bookingsForDay = this.bookings?.filter((booking) =>
      this.isSameDate(booking.date, date)
    );

    const bookedSlots = new Set();
    bookingsForDay.forEach((booking) => {
      const startTime = booking.startTime;
      const duration = booking.duration;

      let [hour, minute] = startTime.split(':').map(Number);
      let totalMinutes = hour * 60 + minute;

      for (let i = 0; i < duration; i += 30) {
        let slotHour = Math.floor(totalMinutes / 60);
        let slotMinute = totalMinutes % 60;
        let slotKey = `${slotHour.toString().padStart(2, '0')}:${slotMinute
          .toString()
          .padStart(2, '0')}`;
        bookedSlots.add(slotKey);
        totalMinutes += 30;
      }
    });

    let slotsWithStatus = this.timeSlots.map((time) => {
      return {
        time: time,
        status: bookedSlots.has(time) ? 'booked' : 'available',
      };
    });

    if (isToday) {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
      let nextSlotHour = currentMinute < 30 ? currentHour : currentHour + 1;
      let nextSlotMinute = currentMinute < 30 ? 30 : 0;

      const currentSlot = `${nextSlotHour
        .toString()
        .padStart(2, '0')}:${nextSlotMinute.toString().padStart(2, '0')}`;
      slotsWithStatus = slotsWithStatus.filter(
        (slot) => slot.time >= currentSlot
      );
    }

    return slotsWithStatus;
  }

  expandOpenModal(day: { date: Date; bookings: any[] }) {
    this.selectedSlot = null;
    this.selectedDayBookings = day;
    this.expandDayBookingModal = true;
    // document.body.style.overflow = 'hidden';
  }

  closeExpandModal() {
    this.expandDayBookingModal = false;
    // document.body.style.overflow = 'auto';
  }

  // Updated `addBooking`
  addBooking(date: Date) {
    this.expandDayBookingModal = false;
    this.availableTimeSlots = this.getAvailableSlots(date);
    this.formConfig.fields.find(
      (field: any) => field.label === 'Start Time'
    ).options = this.availableTimeSlots.map((slot) => ({
      label: slot.time,
      value: slot.time,
      status: slot.status,
    }));
    console.log('this.availableTimeSlots: ', this.availableTimeSlots);
    this.availableDurations = this.getAvailableDurations(
      this.availableTimeSlots[0].time
    );
    console.log('this.availableDurations: ', this.availableDurations);
    this.formConfig.fields.find(
      (field: any) => field.label === 'Duration'
    ).options = this.availableDurations.map((duration) => ({
      label: `${duration} minutes`,
      value: duration,
    }));
    const dateField = this.formConfig.fields.find(
      (field: any) => field.key === 'date'
    );

    if (dateField) {
      dateField.value = date;
    } else {
      this.formConfig.fields.unshift({
        label: 'Date',
        type: 'date',
        key: 'date',
        value: date,
        disabled: true,
      });
    }
    console.log('this.bookings: ', this.bookings);
    this.isSlotSelected = true;
    console.log('this.isSlotSelected: ', this.isSlotSelected);
    // this.selectedSlot = {
    //   date: date,
    //   startTime:
    //     this.availableTimeSlots.length > 0
    //       ? this.availableTimeSlots[0].time
    //       : '00:30',
    //   duration: this.availableDurations[0],
    //   placeholder: '',
    // };
    // document.body.style.overflow = this.selectedSlot ? 'hidden' : 'auto';
    // this.updateBookingForm(this.selectedSlot);
  }

  // Updated `selectSlot`
  selectSlot(date: Date, timeSlot?: string, duration?: number, id?: string) {
    this.isSlotBooked(date, timeSlot);
    this.availableTimeSlots = this.getAvailableSlots(date);
    const booking = this.bookings.find((b) => b.id === id);
    if (booking) {
      this.selectedSlot = { ...booking };
    } else {
      this.selectedSlot = {
        id: uuidv4(),
        date: date,
        startTime: timeSlot || '00:00',
        duration: duration ?? this.availableDurations[0],
        placeholder: '',
      };
    }

    // document.body.style.overflow = this.selectedSlot ? 'hidden' : 'auto';
    this.updateBookingForm(this.selectedSlot);
  }

  updateBookingForm(booking: any) {
    this.bookingForm.patchValue({
      duration: booking.duration,
      startTime: booking.startTime,
      placeholder: booking.placeholder,
      customerName: booking.customerName || '',
      attribute2: booking.attribute2 || '',
    });
  }

  closeModal() {
    this.selectedSlot = null;
    // document.body.style.overflow = this.selectedSlot ? 'hidden' : 'auto';
  }

  getAvailableDurations(startTime: string): number[] {
    let availableDurations: number[] = [30];

    console.log('this.availableTimeSlots: ', this.availableTimeSlots);
    const startTimeIndex = this.availableTimeSlots.findIndex(
      (slot) => slot.time === startTime
    );

    if (startTimeIndex === -1) return availableDurations;

    let gapMinutes = 0;
    let existingBooking = this.bookings.find((b) => b.startTime === startTime);

    for (let i = startTimeIndex; i < this.availableTimeSlots.length; i++) {
      let slot = this.availableTimeSlots[i];
      if (
        slot.status === 'booked' &&
        (!existingBooking || slot.time !== existingBooking.startTime)
      ) {
        break;
      }

      gapMinutes += 30;
    }
    if (gapMinutes >= 60) availableDurations.push(60);
    if (gapMinutes >= 90) availableDurations.push(90);

    return availableDurations;
  }

  bookSlot(data: any) {
    try {
      const newBooking = {
        id: this.selectedSlot?.id || uuidv4(),
        // ...this.selectedSlot!,
        ...data,
      };

      const existingIndex = this.bookings.findIndex(
        (b) => b.id === newBooking.id
      );

      if (existingIndex !== -1) {
        this.bookings[existingIndex] = newBooking;
      } else {
        this.bookings.push(newBooking);
      }
      console.log('this.bookings: ', this.bookings);

      if (this.currentView === 'month') {
        this.generateMonthView();
      } else {
        this.generateWeekView();
      }

      console.log('✅ any Successful:', newBooking);
    } catch (error) {
      console.error('❌ Error while booking:', error);
    }

    this.selectedSlot = null;
    this.isSlotSelected = false;
  }

  editBooking(booking: any) {
    this.selectedSlot = booking;
    this.updateBookingForm(booking);
  }

  deleteBooking(id: any['id']) {
    const index = this.bookings.findIndex((b) => b.id === id);
    if (index !== -1) {
      this.bookings.splice(index, 1);
    }

    if (this.currentView === 'month') {
      this.generateMonthView();
    } else {
      this.generateWeekView();
    }
    this.closeModal();
  }

  generateTimeSlots() {
    this.timeSlots = [];
    for (let hour = 0; hour < 24; hour++) {
      this.timeSlots.push(`${hour.toString().padStart(2, '0')}:00`);
      this.timeSlots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }
  generateSlots(viewType: any) {
    this.generateTimeSlots();
    const firstDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth(),
      1
    );
    const lastDayOfMonth = new Date(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      0
    );

    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

    const endDate = new Date(lastDayOfMonth);
    endDate.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

    const slotsGrid = [];
    let currentWeek = [];

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      const bookingsForDay = this.bookings.filter((booking) =>
        this.isSameDate(booking.date, date)
      );

      const timeSlots = this.timeSlots.map((time) => {
        const booking = bookingsForDay.find((b) => b.startTime === time);
        return {
          time,
          booking: booking || null,
        };
      });

      currentWeek.push({ date: new Date(date), timeSlots });

      if (currentWeek.length === 7) {
        slotsGrid.push([...currentWeek]);
        currentWeek = [];
      }
    }

    this.slotsGrid = slotsGrid;

    if (viewType === 'week') {
      this.extractWeekView();
    }
  }

  extractWeekView() {
    const startOfWeek = new Date(this.currentDate);
    startOfWeek.setDate(this.currentDate.getDate() - this.currentDate.getDay());

    this.currentWeekStart = new Date(startOfWeek);
    this.currentWeekStart.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    this.currentWeekEnd = new Date(endOfWeek);
    this.currentWeekEnd.setHours(23, 59, 59, 999);

    this.weekDays = this.slotsGrid
      .flat()
      .filter(
        (day) =>
          this.isSameOrAfter(day.date, this.currentWeekStart) &&
          this.isSameOrBefore(day.date, this.currentWeekEnd)
      );
  }

  isSameOrAfter(date1: Date, date2: Date): boolean {
    return date1.setHours(0, 0, 0, 0) >= date2.setHours(0, 0, 0, 0);
  }

  isSameOrBefore(date1: Date, date2: Date): boolean {
    return date1.setHours(0, 0, 0, 0) <= date2.setHours(0, 0, 0, 0);
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }

  isPastDate(date: Date): boolean {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure comparison without time part
    return date < today;
  }

  isCurrentTimeSlot(date: Date, time: string): boolean {
    const now = new Date();
    if (!this.isToday(date)) return false;
    const [hour, minute] = time.split(':').map(Number);
    const slotTime = hour * 60 + minute;
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const nearestPastSlot = Math.floor(nowMinutes / 30) * 30;

    return slotTime === nearestPastSlot;
  }

  disablePastSlots() {
    let now = new Date();

    this.weekDays.forEach((day) => {
      let dayDate = new Date(day.date);
      let isPastDay = dayDate < new Date(new Date().setHours(0, 0, 0, 0));

      day.timeSlots.forEach((slot) => {
        let [hours, minutes] = slot.time.split(':').map(Number);
        let slotDateTime = new Date(day.date);
        slotDateTime.setHours(hours, minutes, 0, 0);
        (slot as any).disabled = isPastDay || slotDateTime < now;
      });
    });
  }

  onTimeSlotChange(selectedTime: string) {
    const selectedDate = this.formComponent?.form.get('date')?.value;
    console.log('selectedDate: ', selectedDate);

    if (!selectedDate) {
      console.error('Date not found in form!');
      return;
    }

    const selectedSlot = {
      startTime: selectedTime,
      date: selectedDate, // ✅ Form se date le li
    };

    const selected = this.availableTimeSlots.find(
      (slot) => slot.time === selectedTime
    );

    this.isSlotBooked(selectedDate, selectedTime);
    this.availableDurations = this.getAvailableDurations(selectedTime);
  }

  hasSelectedSlotId(): boolean {
    return (
      !!this.selectedSlot?.id &&
      this.bookings.some((b) => b.id === this.selectedSlot?.id)
    );
  }

  isSlotBooked(date?: Date, startTime?: string): boolean {
    if (!date || !startTime) {
      this.bookingForm.get('duration')?.enable();
      return false;
    }
    const result = this.bookings.some((b) => {
      const bookingDate = new Date(b.date);
      const isDateSame = this.isSameDate(bookingDate, date);
      const isTimeSame = b.startTime.trim() === startTime.trim();

      console.log(
        `Checking Slot: Date(${date}) vs BookingDate(${bookingDate}) => ${isDateSame}`
      );
      console.log(
        `Checking Slot: Time(${startTime}) vs BookingTime(${b.startTime}) => ${isTimeSame}`
      );

      return isDateSame && isTimeSame;
    });

    if (result) {
      this.formComponent.form.get('duration')?.disable();
    } else {
      this.formComponent.form.get('duration')?.enable();
    }

    this.formComponent.form.updateValueAndValidity();
    this.cdr.detectChanges();

    return result;
  }
}
