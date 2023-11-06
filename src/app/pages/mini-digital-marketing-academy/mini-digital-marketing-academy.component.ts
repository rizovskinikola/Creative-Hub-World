import {Component} from '@angular/core';
import {initMiniDigitalMarketingForm} from './mini-digital-marketing-academy';
import {initMiniDigitalMarketingFooterForm} from './mini-digital-marketing-academy';


@Component({
  selector: 'app-mini-digital-marketing-academy',
  templateUrl: './mini-digital-marketing-academy.component.html',
  styleUrls: ['./mini-digital-marketing-academy.component.scss']
})
export class MiniDigitalMarketingAcademyComponent {

  blueListInfo: string = "Поучени од тоа дека на луѓето им се потребни брзи вештини денес и сега, ја креиравме програмата на првата Мини дигитален маркетинг Академија. Целосно практична преку реална и применлива работа каде ти самиот ќе работиш дирекно во сите алатки."
  array_of_blue_list: Array<string> =
    [
      'Заборавете на слушање предавања и фаќање забелешки. Ние сакаме да сте вклучени 100% и Вие во процесот на учење. Сакаме да почнете да размислувате стратешки и да ги вклучите сите елементи од дигиталниот маркетинг за да изградите најдобра оптимизирана стратегија. ',
      'Сакаме да научите како да тестирате, и како да направите Game Plan за ретаргетирање, пред воопшто да почнете со било какви дигитални реклами.',
      'Дигитален маркетинг Академија е целосно базирана на реални случаи и практики, а во секое од предавањата ќе треба да се вклучите и Вие со Ваше активно учество.'
    ]
  array_of_time: Array<string> =
    [
      '17 часа, 3  недели ( Академијата ќе заврши на 30ти јуни) ',
      'предавањата се после 17 часот',
      'целосно онлајн'
    ]
  array_of_program: Array<string> =
    [
      'Научете како да изградите Buyer Persona',
      'Анализа на истражување на пазар и улогата на податоците во креирање на Buyer Persona и таргет група за различни канали',
      'Зошто треба да имаш Game Plan за таргетинг и ретаргетинг пред да започнеш со Фејсбук реклами? ',
      'Како и колку е потребно да тестираш различни Ad sets & Ads? ',
      'Во кој сегмент од funnel-от да користиш Custom, Lookalike, Interest-based Audience? ',
      'Што се conversion events? Какви постојат? ',
      'Како да направиш research на рекламите на конкуренција? ',
      'Каков копи да креираш врз база на твоите Buyer персони?',
      'Како да ги следиш чекорите на купувачот преку Facebook Pixel? ',
      'Како да поставиш Pixel? ',
      'Како да поставиш евенти со Pixel-от на страната на твојот клиент? ',
      'Како да ги мериш резултатите?',
      'Кои метрики ќе ги користиш за да се измериш самостојно како маркетер? ',
      'Какви KPI ќе поставиш? ',
      'Како ќе ги оптимизираш рекламите?'


    ]
  programParagraph: string = ' Ова и уште многу други се темите кои ќе ги работиме во детали и со ваше активно учество и за кои ќе стекнете знаење кое ќе можете да го примените ако веќе работите како #дигитален маркетер или доколку аплицирате за работа.'
  array_of_price_includes: Array<string> =
    [
      'Материјалите кои ќе се користат',
      'Пристап до платформи',
      'Реален проект за маркетинг агенција од САД',
      'Фидбек и достапност на менторот  додека трае мини Академијата',
      'Диплома од Creative Hub'
    ]
  certificateText: string = "Доколку сакате да се стекнете со дополнителен ЕУ сертификат."
  certificateImage: string = "assets/mini-academies/european-certificate.png"

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
  secondDate: string = "Early Bird понуда 26.05 - <b>05.06.2022</b>"
  thirdDate: string = "Цена на академијата"

  ngAfterViewInit() {
    initMiniDigitalMarketingForm();
    initMiniDigitalMarketingFooterForm();
  }
}

