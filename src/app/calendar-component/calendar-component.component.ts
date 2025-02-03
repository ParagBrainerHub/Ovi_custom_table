import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

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
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './calendar-component.component.html',
  styleUrl: './calendar-component.component.css',
})
export class CalendarComponentComponent implements OnInit {
  currentView: 'month' | 'week' = 'month';
  currentDate: Date = new Date();
  bookings: Booking[] = [];
  selectedSlot: Booking | null = null;
  bookingForm: FormGroup;
  // monthGrid: { date: Date; hasBooking: boolean }[][] = [];
  monthGrid: { date: Date; bookings: Booking[] }[][] = [];

  currentWeekStart: Date = new Date();
  currentWeekEnd: Date = new Date();
  // weekDays: { date: Date }[] = [];
  weekDays: {
    date: Date;
    // timeSlots: { time: string; hasBooking: boolean }[];
    timeSlots: { time: string; booking: Booking | null }[];
  }[] = [];
  timeSlots: string[] = [];

  // Configuration
  minHour = 7; // Minimum start hour
  maxHour = 20; // Maximum end hour
  minSlotDuration = 10; // Minimum slot duration in minutes
  maxSlotDuration = 480; // Maximum slot duration in minutes (8 hours)

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      duration: ['', [Validators.required]],
      placeholder: ['', [Validators.required]],
      customerName: [''],
      attribute2: [''],
    });
  }

  // ngOnInit() {
  //   this.generateMonthView();
  // }

  // generateMonthView() {
  //   const firstDayOfMonth = new Date(
  //     this.currentDate.getFullYear(),
  //     this.currentDate.getMonth(),
  //     1
  //   );
  //   const lastDayOfMonth = new Date(
  //     this.currentDate.getFullYear(),
  //     this.currentDate.getMonth() + 1,
  //     0
  //   );

  //   const startDate = new Date(firstDayOfMonth);
  //   startDate.setDate(firstDayOfMonth.getDate() - firstDayOfMonth.getDay());

  //   const endDate = new Date(lastDayOfMonth);
  //   endDate.setDate(lastDayOfMonth.getDate() + (6 - lastDayOfMonth.getDay()));

  //   const grid: { date: Date; hasBooking: boolean }[][] = [];
  //   let currentWeek: { date: Date; hasBooking: boolean }[] = [];

  //   for (
  //     let date = new Date(startDate);
  //     date <= endDate;
  //     date.setDate(date.getDate() + 1)
  //   ) {
  //     currentWeek.push({
  //       date: new Date(date),
  //       hasBooking: this.bookings.some((booking) =>
  //         this.isSameDate(booking.date, date)
  //       ),
  //       // time: '00:00', // Default time, adjust as needed
  //     });

  //     if (currentWeek.length === 7) {
  //       grid.push(currentWeek);
  //       currentWeek = [];
  //     }
  //   }

  //   this.monthGrid = grid;
  // }

  // isSameDate(date1: Date, date2: Date): boolean {
  //   return (
  //     date1.getFullYear() === date2.getFullYear() &&
  //     date1.getMonth() === date2.getMonth() &&
  //     date1.getDate() === date2.getDate()
  //   );
  // }

  // generateTimeSlots() {
  //   for (let hour = this.minHour; hour <= this.maxHour; hour++) {
  //     this.timeSlots.push(`${hour}:00`);
  //     this.timeSlots.push(`${hour}:30`);
  //   }
  // }

  // generateWeekView() {
  //   const startOfWeek = new Date(this.currentDate);
  //   startOfWeek.setDate(this.currentDate.getDate() - this.currentDate.getDay());
  //   this.currentWeekStart = new Date(startOfWeek);

  //   const endOfWeek = new Date(startOfWeek);
  //   endOfWeek.setDate(startOfWeek.getDate() + 6);
  //   this.currentWeekEnd = new Date(endOfWeek);

  //   this.weekDays = [];
  //   for (let i = 0; i < 7; i++) {
  //     const day = new Date(startOfWeek);
  //     day.setDate(startOfWeek.getDate() + i);
  //     this.weekDays.push({ date: day });
  //   }
  // }

  // navigatePreviousWeek() {
  //   this.currentDate.setDate(this.currentDate.getDate() - 7);
  //   this.generateWeekView();
  // }

  // navigateNextWeek() {
  //   this.currentDate.setDate(this.currentDate.getDate() + 7);
  //   this.generateWeekView();
  // }

  // switchView(view: 'month' | 'week') {
  //   this.currentView = view;
  //   if (view === 'month') {
  //     this.generateMonthView();
  //   } else {
  //     this.generateWeekView();
  //   }
  // }

  // selectSlot(date: Date, timeSlot?: string) {
  //   const availableSlot: Booking = {
  //     date: date,
  //     startTime: timeSlot || '00:00', // Default start time
  //     duration: '30', // Default duration
  //     placeholder: '',
  //   };
  //   this.selectedSlot = availableSlot;
  //   this.updateBookingForm(availableSlot);
  // }

  // // selectSlot(date: Date, timeSlot: string) {
  // //   const availableSlot: Booking = {
  // //     date: date,
  // //     startTime: timeSlot,
  // //     duration: '30', // Default duration
  // //     placeholder: '',
  // //   };
  // //   this.selectedSlot = availableSlot;
  // //   this.updateBookingForm(availableSlot);
  // // }

  // updateBookingForm(booking: Booking) {
  //   this.bookingForm.patchValue({
  //     duration: booking.duration,
  //     placeholder: booking.placeholder,
  //     customerName: booking.customerName || '',
  //     attribute2: booking.attribute2 || '',
  //   });
  // }

  // bookSlot() {
  //   if (this.bookingForm.valid) {
  //     const newBooking: Booking = {
  //       ...this.selectedSlot!,
  //       ...this.bookingForm.value,
  //     };

  //     // Validate duration against available slot
  //     this.bookings.push(newBooking);
  //     this.selectedSlot = null;
  //   }
  // }

  // editBooking(booking: Booking) {
  //   this.selectedSlot = booking;
  //   this.updateBookingForm(booking);
  // }

  // deleteBooking(booking: Booking) {
  //   this.bookings = this.bookings.filter((b) => b !== booking);
  // }
  ngOnInit() {
    this.generateTimeSlots(); // Initialize time slots
    if (this.currentView === 'month') {
      this.generateMonthView();
    } else {
      this.generateWeekView();
    }
  }

  generateMonthView() {
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

    // const grid: { date: Date; hasBooking: boolean }[][] = [];
    // let currentWeek: { date: Date; hasBooking: boolean }[] = [];

    const grid: { date: Date; bookings: Booking[] }[][] = [];
    let currentWeek: { date: Date; bookings: Booking[] }[] = [];

    for (
      let date = new Date(startDate);
      date <= endDate;
      date.setDate(date.getDate() + 1)
    ) {
      // currentWeek.push({
      //   date: new Date(date),
      //   hasBooking: this.bookings.some((booking) =>
      //     this.isSameDate(booking.date, date)
      //   ),
      // });
      const bookingsForDay = this.bookings.filter((booking) =>
        this.isSameDate(booking.date, date)
      );
      currentWeek.push({
        date: new Date(date),
        bookings: bookingsForDay,
      });

      if (currentWeek.length === 7) {
        grid.push(currentWeek);
        currentWeek = [];
      }
    }

    this.monthGrid = grid;
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

  generateTimeSlots() {
    for (let hour = this.minHour; hour <= this.maxHour; hour++) {
      this.timeSlots.push(`${hour}:00`);
      this.timeSlots.push(`${hour}:30`);
    }
  }

  generateWeekView() {
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

      // Initialize time slots for each day
      // const timeSlots = this.timeSlots.map((time) => ({
      //   time,
      //   hasBooking: this.bookings.some(
      //     (booking) =>
      //       this.isSameDate(booking.date, day) && booking.startTime === time
      //   ),
      // }));

      const timeSlots = this.timeSlots.map((time) => {
        const booking = this.bookings.find(
          (b) => this.isSameDate(b.date, day) && b.startTime === time
        );
        return {
          time,
          booking: booking || null,
        };
      });

      this.weekDays.push({ date: day, timeSlots });
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
    this.bookingForm.patchValue({
      duration: booking.duration,
      placeholder: booking.placeholder,
      customerName: booking.customerName || '',
      attribute2: booking.attribute2 || '',
    });
  }

  bookSlot() {
    if (this.bookingForm.valid) {
      const newBooking: Booking = {
        ...this.selectedSlot!,
        ...this.bookingForm.value,
      };

      // Add the new booking
      this.bookings.push(newBooking);

      // Update the view to reflect the new booking
      if (this.currentView === 'month') {
        this.generateMonthView();
      } else {
        this.generateWeekView();
      }

      // Close the modal
      this.selectedSlot = null;
    }
  }

  editBooking(booking: Booking) {
    this.selectedSlot = booking;
    this.updateBookingForm(booking);
  }

  deleteBooking(booking: Booking) {
    this.bookings = this.bookings.filter((b) => b !== booking);

    // Update the view to reflect the deleted booking
    if (this.currentView === 'month') {
      this.generateMonthView();
    } else {
      this.generateWeekView();
    }
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

  addBooking(date: Date) {
    this.selectedSlot = {
      date: date,
      startTime: '07:00',
      duration: '30',
      placeholder: '',
    };
    this.updateBookingForm(this.selectedSlot);
  }
}
