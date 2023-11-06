import { Component, OnInit, AfterViewInit } from '@angular/core';
import { initMiniCodeForm } from './mini-code-academy';
import { initMiniCodeFooterForm } from './mini-code-academy';
import { preInitPopUpForm } from './mini-code-academy';

@Component({
  selector: 'app-mini-code-academy',
  templateUrl: './mini-code-academy.component.html',
  styleUrls: ['./mini-code-academy.component.scss']
})
export class MiniCodeAcademyComponent implements OnInit {

  academyName: string = " CODE Академија"
  blueListInfo: string = "Сакаш да почнеш да кодираш, но не знаеш дали е за тебе. Постојано гледаш туторијали, се обидуваш, но нема кој да ти даде реален фидбек за твојот напредок и за дали тоа што го правиш е добро? "
  array_of_blue_list: Array<string> =
    [
      'Потребен ти е ментор кој ќе ти го корегира кодот, и кој ќе го следиш. Некој кој бил на твоето место и точно знае како е да почнуваш од почеток нова професија која ако си доволно упорен носи многу финансиски бенефиции и работа од каде и да сакаш.',
      'Но треба да почнеш од негде, и треба да почнеш денес. Затоа ја направивме нашата првата Мини Code Академија каде преку 4 неделен спринт ќе стекнеш основно искуство во креирање на статички сајт.  Ќе почнеш самиот да пишуваш код уште првиот час и ќе работиш со ментор кој ќе ти биде достапен за сите прашања.',
      'Заборави на слушање предавања и фаќање забелешки. Кодирањето се учи преку пишување на код.'
    ]
  array_of_time: Array<string> =
    [
      '20 часа, 4  недели ( Академијата ќе заврши на 30ти јуни) ',
      'предавањата се после 17 часот',
      'Студентот може да избере дали сака предавања онлајн или во живо '
    ]
  array_of_program: Array<string> =
    [
      'Научете како работи интернетот и како ијадници редови код се претвараат во веб сајт.',
      'Научи ја структурата na HTML, односно основната структура на еден веб сајт.',
      'Запознај се со сите HMTL елементи и атрибути кој што му кажуваат на интернет пребарувачот како да ги прикажува елементите.',
      'CSS (Cascading Style Sheets) е технологија со која ѝ се дава стилот на твојата веб страна, што значи се користи за подобар изглед и распоред на истата. ',
      ' Научи ја синтаксата на CSS, како да ако да  дефинираш селектор и да   го напишеш првиот CSS код.',
      'Позиционирање на елементи',
      'Како функционира CSS Flexbox и како да го примениш истиот',
      'При толку различни големини на уреди што се користат денес практично кодот за само еден одреден уред е неупотреблив. Како да изградиш еден статичен веб сајт респонзивен за различни уреди?'
    ]
    programParagraph: string = 'Ова и уште многу други се темите кои ќе ги работиме во детали и со ваше активно учество и за кои ќе стекнете знаење кое ќе можете да го примените во градење на статички и динамички веб страни.'
    array_of_price_includes: Array<string> = 
    [
      'Материјалите кои ќе се користат',
      'Пристап до платформи',
      'Реален проект - твојот прв вебсајт',
      'Фидбек и достапност на менторот  додека трае мини Академијата',
      'Диплома од Creative Hub'
    ]
    certificateText: string = "Доколку сакате да се стекнете со дополнителен ЕУ сертификат."
    certificateImage: string = "assets/mini-academies/european-certificate.png"

    mentorImg: string = "assets/mini-academies/nikola.png"
    mentorName: string = "Никола Ризовски"
    array_of_mentor_skills: Array<string> = 
    [
      'Веб девелопер во Creative Hub',
      'Ментор на Академијата за фронт-енд.'
    ]
    firstDate: string = "Super Early Bird понуда <b>25.05.2022</b>"
    secondDate: string = "Early Bird понуда 26.05 - <b>05.06.2022</b>"
    thirdDate: string  = "Цена на академијата"
    
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    initMiniCodeForm();
    initMiniCodeFooterForm();
    preInitPopUpForm();
  }

}