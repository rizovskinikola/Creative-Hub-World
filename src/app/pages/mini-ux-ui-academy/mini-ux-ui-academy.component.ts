import { Component, OnInit } from '@angular/core';
import { initMiniUxUiAcademyForm } from './mini-ux-ui-academy';
import { initMiniUxUiAcademyFooterForm } from './mini-ux-ui-academy';

@Component({
  selector: 'app-mini-ux-ui-academy',
  templateUrl: './mini-ux-ui-academy.component.html',
  styleUrls: ['./mini-ux-ui-academy.component.scss']
})


export class MiniUxUiAcademyComponent implements OnInit {
  blueListInfo: string = "Поучени од тоа дека на луѓето им се потребни брзи вештини денес и сега, ја креиравме програмата на првата Мини UX UI Академија. Целосно практична преку реална и применлива работа каде ти самиот ќе работиш дирекно во сите алатки кои се користат во индустријата."
  array_of_blue_list: Array<string> =
    [
      'Заборавете на слушање предавања и фаќање забелешки. Ние сакаме да сте вклучени 100% и Вие во процесот на учење. Сакаме да почнете да размислувате за кои се целите на вашите клиенти и како да ги имплементирате стратешки и да изградите не само лесен за навигација и добар дизајн туку и оптимизиран според елементи на дигитална стратегија.',
      'Сакаме да научите како да тестирате, и како да направите Game Plan за истражување и градење на frameworks, пред воопшто да почнете со било какви дизајни.',
      'Оваа Мини UX UI  Академија е целосно базирана на реални случаи и практики, а во секое од предавањата ќе треба да се вклучите и Вие со Ваше активно учество.'
    ]
    array_of_time: Array<string> = 
    [
      '17 часа, 3  недели ( Академијата ќе заврши на 13. јуни)',
      'предавањата се после 17 часот',
      'целосно онлајн'
    ]
    array_of_program: Array<string> =
    [
      'Вовед во UX UI, сличности и разлики',
      'Дизајн мајндсет и што значи тоа, коклу е важна улогата на еден UX/UI  дизајнер во процесот на развивање на дигиталните продукти?',
      'Основи на дизајн и општа психологија на однесувањето на луѓето',
      'Истражување на конкуренцијата и анализа на постоечки апликации/сајтови од истиот тип како проектот на кој ќе се работи',
      'Креирање на типичен корисник на продуктот (User persona)',
      'Креирање на типичните патеки на користење на продуктот',
      'Исцртување на груби скици (wireframes)',
      'Детална разработка на проектот во Figma',
      'Изработка на репупотребливи компоненти',
      'Градење на кликабилен Prototype на страната'
    ]

    programParagraph: string = 'Ова и уште многу други се темите кои ќе ги работиме во детали и со ваше активно учество и за кои ќе стекнете знаење кое ќе можете да го примените ако веќе работите како #UXUI или доколку аплицирате за работа.'
    array_of_price_includes: Array<string> = 
    [
      'Материјалите кои ќе се користат',
      'Пристап до Figma за тимови ',
      'Разработка на еден реален проект',
      'Фидбек и достапност на менторот  додека трае мини Академијата',
      'Диплома од Creative Hub '
    ]
    certificateText: string = "Доколку сакате да се стекнете со дополнителен  ЕУ сертификат."
    certificateImage: string = "assets/mini-academies/european-certificate.png"
    
    mentorImg: string = "assets/mini-academies/aleksandra.png"
    mentorName: string = "Александра Милошеска"
    array_of_mentor_skills: Array<string> = 
    [
      'UX/UI designer and passionate UX researcher',
      'Academy program Assistant and mentor',
      'Master of Architecture'
    ]
    firstDate: string = "За упис до <b>10.06.2022</b> "
    secondDate: string = "За упис од <b>11.06 -18.06.2022</b> "
    thirdDate: string  = " За упис по <b>18.06.2022</b>  "
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    initMiniUxUiAcademyForm();
    initMiniUxUiAcademyFooterForm();
  }



}
