import { Component, OnInit, TemplateRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home-pg',
  templateUrl: './home-pg.component.html',
  styleUrls: ['./home-pg.component.scss']
})
export class HomePgComponent implements OnInit {
  modalRef: BsModalRef;

  // Image caption as per worder
  imgName: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // Portfolio data
  portfolio: any = [
    { logo: "/assets/icons/tea-cup.svg", uCase: 'A', tech: "Tech1", method: "Method1", year: '2017', heading: "A Tech1 Method1 2017", shortDes: "Learn online at your own pace", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab."},
    { logo: "/assets/icons/folder.svg", uCase: 'B', tech: "Tech1", method: "Method2", year: '2018', heading: "B Tech1 Method2 2018", shortDes: "own pace Learn online at your", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/worldwide.svg", uCase: 'C', tech: "Tech2", method: "Method3", year: '2020', heading: "C Tech2 Method3 2020", shortDes: "pace online at your own Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/tree.svg", uCase: 'E', tech: "Tech3", method: "Method2", year: '2019', heading: "E Tech3 Method2 2019", shortDes: "your online at own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/pine.svg", uCase: 'D', tech: "Tech5", method: "Method4", year: '2021', heading: "D Tech5 Method4 2021", shortDes: "at online your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/love.svg", uCase: 'A', tech: "Tech4", method: "Method5", year: '2020', heading: "A Tech4 Method5 2020", shortDes: "from anywhere your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/money.svg", uCase: 'B', tech: "Tech1", method: "Method1", year: '2017', heading: "B Tech1 Method1 2017", shortDes: "anywhere online at from your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/investment.svg", uCase: 'C', tech: "Tech3", method: "Method3", year: '2019', heading: "C Tech3 Method3 2019", shortDes: "from online at your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/pie-chart.svg", uCase: 'E', tech: "Tech4", method: "Method4", year: '2021', heading: "E Tech4 Method4 2021", shortDes: "Take an online at your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/lamp.svg", uCase: 'D', tech: "Tech5", method: "Method5", year: '2018', heading: "D Tech5 Method5 2018", shortDes: "self-paced online at your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." }
  ]

  // Some variables
  year: string = 'All';
  method: string = 'All';
  tech: string = 'All';
  uCase: string = 'All';

  fPortfolio: any;
  heading: string;
  details: string;
  logo: string;

  pEnd: number = 6;


  // Carousel Configuration for article
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 5,
    lazyLoad: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  // Carousel Configuration for portfolio
  ptfOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    lazyLoad: false,
    autoplay: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: true
  }

  // Interest Image album
  album: any = [];

  constructor(
    private lightbox: Lightbox,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {

    // Interest Image list creation
    for (let i = 1; i <= 10; i++) {
      const _album = {
        src: "/assets/images/interests" + i + ".jpg",
        caption: this.imgName[i],
        thumb: "/assets/images/interests" + i + ".jpg"
      };

      this.album.push(_album)
    }

    this.pfFilter();
  }

  // Open Image popup on interest section
  open(index: number): void {
    this.lightbox.open(this.album, index);
  }

  // Close Image popup on interest section
  close(): void {
    this.lightbox.close();
  }

  // Filter Portfolio  as per Use Case
  uCFilter(uc: string) {
    this.uCase = uc;
    this.pfFilter();
  }

  // Filter Portfolio  as per Technology
  tchFilter(tch: string) {
    this.tech = tch;
    this.pfFilter();
  }

  // Filter Portfolio  as per Methods
  mtdFilter(mtd: string) {
    this.method = mtd;
    this.pfFilter();
  }

  // Filter Portfolio  as per Year
  yrFilter(yr: string) {
    this.year = yr;
    this.pfFilter();
  }

  // Filter Portfolio data as per criteria
  pfFilter() {
    this.pEnd = 6;
    this.fPortfolio = this.portfolio;
    if (this.uCase != 'All')
      this.fPortfolio = this.portfolio.filter(e => e.uCase.toLowerCase().includes(this.uCase.toLowerCase()));
    if (this.tech != 'All')
      this.fPortfolio = this.fPortfolio.filter(e => e.tech.toLowerCase().includes(this.tech.toLowerCase()));
    if (this.method != 'All')
      this.fPortfolio = this.fPortfolio.filter(e => e.method.toLowerCase().includes(this.method.toLowerCase()));
    if (this.year != 'All')
      this.fPortfolio = this.fPortfolio.filter(e => e.year.toLowerCase().includes(this.year.toLowerCase()));
  }

  // See All in portfolio section
  addMore() {
    let max = this.fPortfolio.length;
    if (max > 12)
      this.pEnd = 12;
    else
      this.pEnd = max;
  }

  // See Less in portfolio section
  rmvMore() {
    this.pEnd = 6;
  }

  // Open popup on portfolio section
  openModal(template: TemplateRef<any>, heading: string, details: string, logo: string) {
    this.modalRef = this.modalService.show(template);
    this.heading = heading;
    this.details = details;
    this.logo = logo;
  }

}
