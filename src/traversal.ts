import { Injectable } from '@angular/core';
import { Marker, Resolver, Traverser, Normalizer } from 'angular-traversal';
import { Observable } from 'rxjs/Observable';

import { ResourceService } from './resource.service';
import { ConfigurationService } from './configuration.service';
import { ViewView } from './views/view';

@Injectable()
export class InterfaceMarker extends Marker {
  mark(context: any): string[] {
    return context.interfaces;
  }
}

@Injectable()
export class RESTAPIResolver extends Resolver {

  constructor(private resource: ResourceService) {
    super();
  }

  resolve(path: string): Observable<any> {
    return this.resource.get(path).map(res => res.json());
  }
}

@Injectable()
export class PloneViews {

    constructor(private traverser: Traverser) {}

    initialize() {
        this.traverser.addView('view', '*', ViewView);
    }
}

@Injectable()
export class FullPathNormalizer extends Normalizer {

  constructor(private config: ConfigurationService) {
    super();
  }
  
  normalize(path): string {
    const base = this.config.get('BACKEND_URL');
    if (path.startsWith(base)) {
      return path.split(base)[1];
    } else {
      return path;
    }
  }
}