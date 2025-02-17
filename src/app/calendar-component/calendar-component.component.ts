import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

interface Booking {
  date: Date;
  startTime: string;
  duration: string;
  placeholder: string;
  customerName?: string;
  attribute2?: string;
}

@Component({
  selector: 'app-calendar-component',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.css',
})
export class CalendarComponentComponent implements OnInit {
  currentView: 'month' | 'week' = 'month';
  currentDate: Date = new Date();
  bookings: Booking[] = [];
  selectedSlot: Booking | null = null;
  bookingForm: FormGroup;
  monthGrid: { date: Date; bookings: Booking[] }[][] = [];
  slotsGrid: any[] = [];

  currentWeekStart: Date = new Date();
  currentWeekEnd: Date = new Date();
  weekDays: {
    date: Date;
    timeSlots: { time: string; booking: Booking | null; disabled: boolean }[];
  }[] = [];
  timeSlots: string[] = [];
  availableTimeSlots: { time: string; status: string }[] = [];
  isSlotBooked: boolean = false;

  minHour = 7;
  maxHour = 20;
  minSlotDuration = 10;
  maxSlotDuration = 480;

  constructor(private cdr: ChangeDetectorRef, private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      duration: ['', [Validators.required]],
      placeholder: ['', [Validators.required]],
      startTime: ['', [Validators.required]],
      customerName: [''],
      attribute2: [''],
    });
  }

  ngOnInit() {
    this.generateMonthView();
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
      console.log('this.weekDays: ', this.weekDays);
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

  // selectSlot(date: Date, timeSlot?: string) {
  //   const availableSlot: Booking = {
  //     date: date,
  //     startTime: timeSlot || '00:00', // Use provided timeSlot or default to '00:00'
  //     duration: '30', // Default duration
  //     placeholder: '',
  //   };
  //   this.selectedSlot = availableSlot;
  //   this.updateBookingForm(availableSlot);
  // }
  selectSlot(date: Date, timeSlot?: string) {
    const booking = this.bookings.find(
      (b) => this.isSameDate(b.date, date) && b.startTime === timeSlot
    );
    if (booking) {
      this.selectedSlot = booking;
      this.updateBookingForm(booking);
    } else {
      this.selectedSlot = {
        date: date,
        startTime: timeSlot || '00:00',
        duration: '30',
        placeholder: '',
      };
      this.updateBookingForm(this.selectedSlot);
    }
  }

  updateBookingForm(booking: Booking) {
    console.log('booking:1234 ', booking);
    this.bookingForm.patchValue({
      duration: booking.duration,
      startTime: booking.startTime,
      placeholder: booking.placeholder,
      customerName: booking.customerName || '',
      attribute2: booking.attribute2 || '',
    });
  }

  editBooking(booking: Booking) {
    console.log('booking: ', booking);
    this.selectedSlot = booking;
    this.updateBookingForm(booking);
  }

  deleteBooking(booking: Booking) {
    this.bookings = this.bookings.filter((b) => b !== booking);

    if (this.currentView === 'month') {
      this.generateMonthView();
    } else {
      this.generateWeekView();
    }
  }

  addBooking(date: Date) {
    console.log(this.weekDays, 'weekDays');
    console.log('this.bookings: ', this.bookings);

    const isToday = this.isSameDate(date, new Date());

    const bookingsForDay = this.bookings?.filter((booking) =>
      this.isSameDate(booking.date, date)
    );

    const bookedSlots = new Set();
    bookingsForDay.forEach((booking) => {
      const startTime = booking.startTime;
      const duration = parseInt(booking.duration, 10);

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
      console.log('currentSlot: ', currentSlot);
      slotsWithStatus = slotsWithStatus.filter(
        (slot) => slot.time >= currentSlot
      );
    }

    console.log('slotsWithStatus: ', slotsWithStatus);
    slotsWithStatus[0].time;
    console.log('slotsWithStatus[0].time;: ', slotsWithStatus[0].time);
    this.selectedSlot = {
      date: date,
      startTime: slotsWithStatus.length > 0 ? slotsWithStatus[0].time : '00:30',
      duration: '30',
      placeholder: '',
    };

    this.updateBookingForm(this.selectedSlot);
    this.availableTimeSlots = slotsWithStatus;
    console.log('this.availableTimeSlots: ', this.availableTimeSlots);
  }

  bookSlot() {
    if (this.bookingForm.valid) {
      console.log('this.selectedSlot: ', this.selectedSlot);
      console.log('this.bookingForm.value: ', this.bookingForm.value);
      const newBooking: Booking = {
        ...this.selectedSlot!,
        ...this.bookingForm.value,
      };
      console.log('newBooking: ', newBooking);

      // Check if booking already exists
      const existingIndex = this.bookings.findIndex(
        (b) =>
          this.isSameDate(b.date, newBooking.date) &&
          b.startTime === newBooking.startTime
      );

      if (existingIndex !== -1) {
        this.bookings[existingIndex] = newBooking;
      } else {
        this.bookings.push(newBooking);
      }

      // this.availableTimeSlots = this.availableTimeSlots.map((slot) => {
      //   if (slot.time === newBooking.startTime) {
      //     return { ...slot, status: 'booked' };
      //   }
      //   return slot;
      // });

      // Regenerate the view
      if (this.currentView === 'month') {
        this.generateMonthView();
      } else {
        this.generateWeekView();
      }

      this.selectedSlot = null;
    }
  }

  // ///////////////////////////   Parag Jain code   ////////////////

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

  getAvailableDurations(startTime: string): number[] {
    let availableDurations = [30]; // Default minimum duration
    const startTimeIndex = this.availableTimeSlots.findIndex(
      (slot) => slot.time === startTime
    );

    if (startTimeIndex === -1) return availableDurations; // If the time is not found, return 30 min only

    let nextBookedIndex = this.availableTimeSlots.findIndex(
      (slot, index) => index > startTimeIndex && slot.status === 'booked'
    );

    if (nextBookedIndex === -1) {
      // No booked slots after, so we can consider all durations
      availableDurations = [30, 60, 90];
    } else {
      // Calculate the available gap
      const availableTimeSlots = this.availableTimeSlots.slice(
        startTimeIndex,
        nextBookedIndex
      );
      const gapMinutes = availableTimeSlots.length * 30;

      if (gapMinutes >= 60) availableDurations.push(60);
      if (gapMinutes >= 90) availableDurations.push(90);
    }

    return availableDurations;
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
    console.log('this.weekDays: disabled ', this.weekDays);
  }

  onTimeSlotChange(selectedTime: string) {
    console.log('selectedTime: ', selectedTime);
    console.log('this.availableTimeSlots: ', this.availableTimeSlots);

    const selected = this.availableTimeSlots.find(
      (slot) => slot.time === selectedTime
    );
    console.log('selected: ', selected);

    this.isSlotBooked = selected?.status === 'booked';
    console.log('this.isSlotBooked: ', this.isSlotBooked);

    if (this.isSlotBooked) {
      this.bookingForm.controls['duration'].disable();
    } else {
      this.bookingForm.controls['duration'].enable();
      this.bookingForm.controls['startTime'].enable();
    }

    // Ensure UI updates
    this.cdr.detectChanges();
  }
}
