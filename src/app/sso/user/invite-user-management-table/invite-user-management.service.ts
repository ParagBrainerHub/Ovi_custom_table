import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InviteUser } from './invite-user-management.model';

@Injectable({
  providedIn: 'root',
})
export class InviteUserManagementService {
  private invitesSubject = new BehaviorSubject<InviteUser[]>([]);
  invites$ = this.invitesSubject.asObservable();

  constructor() {}

  addOrUpdateInvite(newInvite: InviteUser) {
    const currentInvites = this.invitesSubject.value;
    const index = currentInvites.findIndex(
      (invite) => invite.id === newInvite.id
    );

    if (index !== -1) {
      currentInvites[index] = newInvite;
    } else {
      currentInvites.push(newInvite);
    }
    this.invitesSubject.next([...currentInvites]);
  }

  getInvites() {
    return this.invites$;
  }

  deleteInvite(inviteId: string) {
    const currentInvites = this.invitesSubject.value;
    const updatedInvites = currentInvites.filter(
      (invite) => invite.id !== inviteId
    );

    this.invitesSubject.next(updatedInvites);
  }
}
