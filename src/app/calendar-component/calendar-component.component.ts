import {
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
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
interface Booking {
  id?: string;
  date: Date;
  startTime: string;
  duration: number;
  placeholder: string;
  customerName?: string;
  attribute2?: string;
}

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
  ],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.css',
})
export class CalendarComponentComponent implements OnInit, OnChanges {
  @Input() formConfig: any;
  currentView: 'month' | 'week' = 'month';
  currentDate: Date = new Date();
  bookings: Booking[] = [];
  selectedSlot: Booking | null = null;
  bookingForm: FormGroup;
  monthGrid: { date: Date; bookings: Booking[] }[][] = [];
  slotsGrid: any[] = [];
  expandDayBookingModal: boolean = false;
  currentWeekStart: Date = new Date();
  currentWeekEnd: Date = new Date();
  weekDays: {
    date: Date;
    timeSlots: { time: string; booking: Booking | null; disabled: boolean }[];
  }[] = [];
  timeSlots: string[] = [];
  availableTimeSlots: { time: string; status: string }[] = [];
  selectedDayBookings: { date: Date | null; bookings: Booking[] } = {
    date: null,
    bookings: [],
  };
  availableDurations: number[] = [];
  isDurationDisabled: boolean = false;
  minHour = 7;
  maxHour = 20;
  minSlotDuration = 10;
  maxSlotDuration = 480;

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      duration: ['', [Validators.required]],
      placeholder: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      // customerName: [''],
      // attribute2: [''],
    });
  }

  ngOnInit() {
    this.generateMonthView();

    if (this.formConfig) {
      this.extendFormWithConfig();
    } else {
      console.warn('⚠️ formConfig undefined hai, form extend nahi ho raha.');
    }

    console.log('Booking Form Controls:', this.bookingForm.controls);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['formConfig'] && this.formConfig) {
      this.extendFormWithConfig();
    }
    if (changes['selectedSlot']) {
      const currentValue = changes['selectedSlot'].currentValue;
      const previousValue = changes['selectedSlot'].previousValue;

      console.log('Selected Slot Changed:', {
        current: currentValue,
        previous: previousValue,
        firstChange: changes['selectedSlot'].firstChange,
      });

      if (currentValue) {
        console.log('Modal Opened with booking:', currentValue);
      } else {
        console.log('Modal Closed');
      }
    }
  }

  extendFormWithConfig() {
    if (!this.formConfig || !this.formConfig.fields) {
      console.warn('⚠️ formConfig ya fields missing hai.');
      return;
    }

    let additionalFields: any = {};

    this.formConfig.fields.forEach((field: any) => {
      if (!field.label) {
        console.warn(`⚠️ Field label missing hai:`, field);
        return;
      }

      let safeKey = this.toSafeKey(field.label); // ✅ Convert label to safe key

      if (['duration', 'placeholder', 'startTime'].includes(safeKey)) {
        return; // Ye fields already defined hain, inko ignore karenge
      }

      let validators = [];
      if (field['required']) validators.push(Validators.required);
      if (field['validation']?.['minLength'])
        validators.push(Validators.minLength(field['validation']['minLength']));
      if (field['validation']?.['maxLength'])
        validators.push(Validators.maxLength(field['validation']['maxLength']));
      if (field['validation']?.['minValue'])
        validators.push(Validators.min(field['validation']['minValue']));
      if (field['validation']?.['maxValue'])
        validators.push(Validators.max(field['validation']['maxValue']));

      additionalFields[safeKey] = ['', validators]; // ✅ Safe key use ho raha hai
    });

    this.bookingForm = this.fb.group({
      duration: ['', [Validators.required]],
      placeholder: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      ...additionalFields,
    });

    console.log('✅ Final Form Controls:', this.bookingForm.controls);
  }

  toSafeKey(label: string): string {
    return label.toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '');
  }

  submitBooking() {
    if (this.bookingForm.valid) {
      console.log('Booking Data:', this.bookingForm.value);
    }
  }

  generateMonthView() {
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

    const grid: { date: Date; bookings: Booking[]; timeSlots: any[] }[][] = [];
    let currentWeek: { date: Date; bookings: Booking[]; timeSlots: any[] }[] =
      [];

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

  // generateTimeSlots() {
  //   for (let hour = this.minHour; hour <= this.maxHour; hour++) {
  //     this.timeSlots.push(`${hour}:00`);
  //     this.timeSlots.push(`${hour}:30`);
  //   }
  // }

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

  expandOpenModal(day: { date: Date; bookings: Booking[] }) {
    this.selectedSlot = null;
    this.selectedDayBookings = day;
    this.expandDayBookingModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeExpandModal() {
    this.expandDayBookingModal = false;
    document.body.style.overflow = 'auto';
  }

  // Updated `addBooking`
  addBooking(date: Date) {
    this.expandDayBookingModal = false;
    this.availableTimeSlots = this.getAvailableSlots(date);
    this.availableDurations = this.getAvailableDurations(
      this.availableTimeSlots[0].time
    );
    this.selectedSlot = {
      date: date,
      startTime:
        this.availableTimeSlots.length > 0
          ? this.availableTimeSlots[0].time
          : '00:30',
      duration: this.availableDurations[0],
      placeholder: '',
    };
    document.body.style.overflow = this.selectedSlot ? 'hidden' : 'auto';
    this.updateBookingForm(this.selectedSlot);
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

    document.body.style.overflow = this.selectedSlot ? 'hidden' : 'auto';
    this.updateBookingForm(this.selectedSlot);
  }

  updateBookingForm(booking: Booking) {
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
    document.body.style.overflow = this.selectedSlot ? 'hidden' : 'auto';
  }

  getAvailableDurations(startTime: string, duration?: string): number[] {
    let availableDurations: number[] = [30];

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

  bookSlot() {
    console.log(this.bookingForm.value, 'this.bookingForm.value');
    if (this.bookingForm.valid) {
      try {
        const newBooking: Booking = {
          id: this.selectedSlot?.id || uuidv4(),
          ...this.selectedSlot!,
          ...this.bookingForm.value,
        };
        const existingIndex = this.bookings.findIndex(
          (b) => b.id === newBooking.id
        );
        console.log(newBooking, 'newBooking');

        if (existingIndex !== -1) {
          this.bookings[existingIndex] = newBooking;
        } else {
          this.bookings.push(newBooking);
        }

        if (this.currentView === 'month') {
          this.generateMonthView();
        } else {
          this.generateWeekView();
        }

        console.log('✅ Booking Successful:', newBooking);
      } catch (error) {
        console.error('❌ Error while booking:', error);
      }

      this.selectedSlot = null;
    } else {
      console.warn('⚠️ Form is invalid:', this.bookingForm.errors);
      Object.keys(this.bookingForm.controls).forEach((key) => {
        if (this.bookingForm.controls[key].invalid) {
          console.warn(
            `❌ Field "${key}" has errors:`,
            this.bookingForm.controls[key].errors
          );
        }
      });
    }
  }

  editBooking(booking: Booking) {
    this.selectedSlot = booking;
    this.updateBookingForm(booking);
  }

  deleteBooking(id: Booking['id']) {
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
    if (!this.selectedSlot) return;
    this.selectedSlot = { ...this.selectedSlot, startTime: selectedTime };
    const selected = this.availableTimeSlots.find(
      (slot) => slot.time === selectedTime
    );
    this.isSlotBooked(this.selectedSlot.date, selectedTime);
    this.availableDurations = this.getAvailableDurations(selectedTime);
    // this.cdr.detectChanges();
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
      this.bookingForm.get('duration')?.disable();
    } else {
      this.bookingForm.get('duration')?.enable();
    }

    this.bookingForm.updateValueAndValidity();
    this.cdr.detectChanges();

    return result;
  }
}
