import { Component } from '@angular/core';

@Component({
  selector: 'lib-company-logo',
  template: `
    <div class="mb-5 flex items-center justify-center">
      <img
        src="images/download.png"
        alt="Marikina Valley Medical Center Logo"
        class="w-62.5 h-auto"
      />
    </div>
  `,
})
export class CompanyLogo {}
