import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-allocations-nested-view',
  templateUrl: './allocations-nested-view.component.html',
  styleUrls: ['./allocations-nested-view.component.scss']
})
export class AllocationsNestedViewComponent {
  @Input() teamMembers;
  showChildren = {};

  toggleDropDown(id) {
    if (this.showChildren[id]) {
      this.showChildren[id] = !this.showChildren[id];
    } else {
      this.showChildren[id] = true;
    }
  }
}
