import {Injectable} from "@angular/core";
import * as moment from 'moment'
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})

export class DateService {
  public date: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment())

  getDate() {
    return this.date.getValue().format('MMMM YYYY')
  }

  getDateForOrganizer() {
    return this.date.getValue().format('DD.MM.YYYY')
  }

  changeMonth(dir: number) {
    const value = this.date.value.add(dir, 'month')
    this.date.next(value)
  }

  changeDate(date: moment.Moment) {
    const value = this.date.value.set({
      date:date.date(),
      month:date.month()
    })
    this.date.next(value)
  }
}
