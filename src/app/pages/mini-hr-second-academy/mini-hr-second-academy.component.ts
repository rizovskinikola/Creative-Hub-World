import { Component, OnInit, AfterViewInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { initMiniHrForm } from './mini-hr-second-academy';


@Component({
  selector: 'app-mini-hr-second-academy',
  templateUrl: './mini-hr-second-academy.component.html',
  styleUrls: ['./mini-hr-second-academy.component.scss']
})
export class MiniHrSecondAcademyComponent implements OnInit {
  blueListInfo: string = "Поучени од тоа дека на луѓето им се потребни брзи вештини денес и сега, ја креиравме програмата на втората Мини HR Академија.  Целосно практична преку реални и примеливи случаи. "
  array_of_blue_list: Array<string> =
    [
      'Перформанс менаџментот е најзначајниот HR процес во компанијата, но честопати и оној кој е најтежок за да се имплементира. Примарната цел на секоја компанија е да остварува приходи. ' +
      'Со правилно имплементиран перформанс менаџмент систем ќе можете да ја измерите ефиканоста и ефективноста на сите вработени. Ќе можете да им зададете јасни индивидуални цели ( KPI)  кои ќе бидат во насока на остварување на годишните цели на компанијата. ' +
       'Притоа истите да ги поделите на мини-клучни-цели ( KRA ) кои ќе треба да се остваруваат на месечно и неделно ниво. На тој начин сите вработени точно ќе знаат што се очекува од нив, самите ќе можат да превземат акција за да ги остварат и да бидат помотивирани поради тоа што знаат точно каде и во кој дел ќе се развијат.',
      'Перформанс менаџмент системот можете и да го користите и како алатка за интерна промоција, кога имате отворена нова работна позиција. ' +
      'Истиот може да се користи и како алатка за стимулација и награда на добрите вработени преку формирање на систем на бонуси ( како варијабилен дел од плата ) или пак доколку вработените покажуваат слаб перформанс да влезат во дисциплински процес за кој ќе имате однапред утврден акционен план.',
      'Се ова е се изучува на оваа мини Академија целосно посветена на процесот на перформанс менаџмент. '
    ]
    forWhoTitle: string = "По завршувањето на оваа Мини Академија вработените ќе знаат како:"
    array_of_for_who: Array<string> = 
    [
      'Да го имплементираат перфроманс менаџмент процесот во една компанија',
      'Да имплементираат дисциплински процес и процес на акционен план',
      'Да предложат начини на награда',
      'Да го имплменетираат во процесот на интерна селекција на кадри',
      'Да ги обучат менаџерите како да го постават истиот ',
      'Да спремаат тренинг презентации за вработените '


    ]
  array_of_time: Array<string> =
    [
      '15 часа, 3  недели ( Академијата ќе заврши на 14ти септември)',
      'предавањата се после 17 часот',
      'целосно онлајн'
    ]
  array_of_program: Array<string> =
    [
      'Како да поставиш систем на мерење на учинокот во компанијата?',
      'Како да поставиш KPI? ',
      'Како да поставиш KRA? ',
      'Како да имплементираш Performance Appraisal во компанија?',
      'Како да направиш тренинг и обука за менаџмент при имплементирање на перфроманс менаџмент?',
      'Како да поставиш дисциплонски систем?',
      'Како се издава евалуациона форма на вработените?',
      'Какви типови на награди и бонуси може да се имплементираат?'
    ]
  programParagraph: string = ' Ова и уште многу други се темите кои ќе ги работиме во детали и со ваше активно учество и за кои ќе стекнете знаење кое ќе можете да го примените ако веќе работите како HR или доколку аплицирате за работа.'
  array_of_price_includes: Array<string> =
    [
      'Темплејти за Job Description, KPI, KRA & Performance Appraisal Form',
      'Материјали од Харвард во форма на Case studies за како се издава фидбек и како се имплементира Перформанс менаџмент',
      'Книга HR Scorecard за поставување на KPI во одделот за човечки ресурси',
      'Истражувачки домашни пред секој час ( за оние кои сакаат да научат повеќе )',
      'Фидбек и достапност на менторот додека трае мини Академијата',
      'Диплома од Creative Hub'
    ]
  certificateText: string = "Доколку сакате да се стекнете со дополнителен американски признат сертификат од SHRM."
  certificateImage: string = "assets/mini-academies/shrm-certificate.png"

  mentorImg: string = "assets/mini-academies/arijana.png"
  mentorName: string = "Аријана Коскарова"
  mentorSkillsImg: string = "assets/mini-academies/forbes.png"
  array_of_mentor_skills: Array<string> = 
  [
    'MBA, CEO на Creative Hub Miami, ко-основач на Creative Hub',
    'Oсновач на Balkan Entrepreneurship Summit  & HR Transformation Summit',
    'Forbes under 30, Davos awarded speaker',
    'Monaco Outstanding awardee',
    'Член на World Business Angels Investment Forum.'
  ]
  firstDate: string = "Super Early Bird цена за уписи до 20ти јули"
  secondDate: string = "Early Bird до 25ти август"
  thirdDate: string  = "Регуларна цена"
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document : Document
  ) {}

  ngOnInit() {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://akoskarova.activehosted.com/f/embed.php?id=141';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);
 }

  ngAfterViewInit() {
    initMiniHrForm();
  }


}
