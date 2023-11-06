import { Component, OnInit, AfterViewInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { initMiniHrForm } from './mini-hr-academy';
import { initMiniHrFooterForm } from './mini-hr-academy';

@Component({
  selector: 'app-mini-hr-academy',
  templateUrl: './mini-hr-academy.component.html',
  styleUrls: ['./mini-hr-academy.component.scss']
})
export class MiniHrAcademyComponent implements OnInit {
  blueListInfo: string = "Поучени од тоа дека на луѓето им се потребни брзи вештини денес и сега, ја креиравме програмата на првата Мини HR Академија.  Целосно практична преку реални и примеливи случаи. "
  array_of_blue_list: Array<string> =
    [
      'Заборавете на слушање предавања и фаќање забелешки. Ние сакаме да сте вклучени 100% и Вие во процесот на учење. Сакаме да го развиеме Вашето критично мислење и сакаме да го разбудиме Вашиот менаџерски потенцијал.',
      'Оваа Мини Академија е целосно базирана на реални случаи и практики, а во секое од предавањата ќе треба да се вклучите и Вие со Ваша самостојна анализа. ',
    ]
    forWhoTitle: string = "За кого е оваа програма?"
    array_of_for_who: Array<string> = 
    [
      'Оваа Забрзана мини програма е за активни учесници, независно дали сте почетници или веќе работите во оваа област.'
    ]
  array_of_time: Array<string> =
    [
      '20 часа, 3  недели ( Академијата ќе заврши на 30ти јуни)',
      'предавањата се после 17 часот',
      'целосно онлајн'
    ]
  array_of_program: Array<string> =
    [
      'Дали знаеш кои се твоите најдобри кандидати за интервју? ',
      'Како да вработиш некој кој никогаш не си го запознал во живо? ',
      'Кои онлајн алатки да ги користиш за регутација?',
      'Што е Skills-Based Approach во Hiring & Developing of Talent? ',
      'Како да вметнеш Employer Branding во Job Description?',
      'Како да ја позиционираш Employer Branding стратегијата на компанијата ? ',
      'Како да вметнеш општествена одговорност и Employer Branding во реклами за онлајн регрутација?',
      'Како да ги подготвиш твоите вработени за коучинг? ',
      'Како да поставиш култура на раст во компанијата?',
      'Како вработените да стекнат доверба во тебе како HR? '


    ]
  programParagraph: string = ' Ова и уште многу други се темите кои ќе ги работиме во детали и со ваше активно учество и за кои ќе стекнете знаење кое ќе можете да го примените ако веќе работите како HR или доколку аплицирате за работа.'
  array_of_price_includes: Array<string> =
    [
      'Книга “Coaching of Employees” која останува за Вас',
      'Сите Харвард материјали кои ќе се користат',
      'Истражувачки домашни пред секој час (за оние кои сакаат да научат повеќе )',
      'Фидбек и достапност на менторот  додека трае мини Академијата',
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
  firstDate: string = "Super Early Bird понуда <b>25.05.2022</b>"
  secondDate: string = "Last Minute Offer"
  thirdDate: string  = "Цена на академијата"
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
    initMiniHrFooterForm();
  }

}


