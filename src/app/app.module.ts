import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GamesComponent } from './games/games.component';
import { FaqComponent } from './faq/faq.component';
import { GuessWhoComponent } from './games/guess-who/guess-who.component';
import { MadlibComponent } from './games/madlib/madlib.component';
import { PhotoHuntComponent } from './games/photo-hunt/photo-hunt.component';
import { WeddingPartyAboutComponent } from './wedding-party-about/wedding-party-about.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SongLyricsComponent } from './song-lyrics/song-lyrics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopBarComponent,
    ScheduleComponent,
    GamesComponent,
    FaqComponent,
    GuessWhoComponent,
    MadlibComponent,
    PhotoHuntComponent,
    WeddingPartyAboutComponent,
    SongLyricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
