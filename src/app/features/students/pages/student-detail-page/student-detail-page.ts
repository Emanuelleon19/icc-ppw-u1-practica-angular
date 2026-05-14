import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-detail-page',
  imports: [RouterLink],
  templateUrl: './student-detail-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailPage {
  private route = inject(ActivatedRoute);
  readonly ID = this.route.snapshot.paramMap.get('id');
}