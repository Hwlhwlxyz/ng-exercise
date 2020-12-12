ng-exercise

生成app-routing		
https://angular.io/guide/router
```bash
ng generate module app-routing --flat --module=app
```

ng2-chart
https://www.npmjs.com/package/ng2-charts

import ChartsModule to app.module.ts
```
@NgModule({
  declarations: [
    AppComponent,
    Ng2chartExampleComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```