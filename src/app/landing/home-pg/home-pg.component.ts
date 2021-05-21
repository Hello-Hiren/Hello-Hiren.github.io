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
  imgName: any = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

  // Portfolio data
  portfolio: any = [
    { logo: "/assets/icons/worldwide.svg", uCase: 'A', tech: "SAS", method: "Statistics", year: '2008', heading: "Italian Ice Cream", shortDes: "Investigating the impact of Green Tea on the Human Appetite the impact of Green Tea Tea Tea Tea Tea Tea Tea Tea.", details: "Designed and analysed a study to investigate the influence of certain environmental factors on the temperatures of a new Iced-Coffee Drink. The objective of the study was to identify trends (if any) between these factors which could help indicate why problems such as Shrinkage, Separation and Ice occur in the Iced-Coffee Drink while in market. The temperature of the Iced-Coffee Drink was modelled while exploring factors such as cabinet type, cabinet position within outlets and cabinet temperatures. The existence of whether a problem existed or not was also modelled for Shrinkage, Separation and Ice separately. The study uncovered a sense of confusion among outlets regarding the correct temperature the ice-cream cabinets should be set to - as a result, the cabinets were being set at higher temperatures leading to Iced-Coffee drinks problems."},
    { logo: "/assets/icons/folder.svg", uCase: 'B', tech: "SAS", method: "Statistics", year: '2008', heading: "Sensory Characteristics", shortDes: "Investigating the impact of Green Tea on the Human Appetite the impact of Green Tea Tea Tea Tea Tea Tea Tea Tea.", details: "Analysed a study to assess if twelve panellists act in concordance as a panel regarding the sensory characteristics of six ice cream samples with the aim to understand differences (if any) between panellists and products. The study found there was most concurrence between panellist for Walls Cornish Ice Cream, and least concurrence between panellists for Tesco Vaniletta Ice Cream. Additionally, a consensus configuration suggested that panellists differentiated well between Carte D’Or Vanilla, Walls Cornish and Tesco Soft Scoop." },
    { logo: "/assets/icons/worldwide.svg", uCase: 'C', tech: "SAS", method: "Statistics", year: '2008', heading: "Green Tea", shortDes: "Investigating the impact of Green Tea on the Human Appetite the impact of Green Tea Tea Tea Tea Tea Tea Tea Tea.", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/tree.svg", uCase: 'E', tech: "SAS", method: "Statistics", year: '2008', heading: "Cosmetics Products", shortDes: "Investigating the impact of Green Tea on the Human Appetite the impact of Green Tea Tea Tea Tea Tea Tea Tea Tea.", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/pine.svg", uCase: 'D', tech: "SAS", method: "Statistics", year: '2008', heading: "Ice-cream Pannel", shortDes: "Investigating the impact of Green Tea on the Human Appetite the impact of Green Tea Tea Tea Tea Tea Tea Tea Tea.", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/love.svg", uCase: 'A', tech: "SAS", method: "Statistics", year: '2008', heading: "Root Cause Investigation", shortDes: "Investigating the impact of Green Tea on the Human Appetite the impact of Green Tea Tea Tea Tea Tea Tea Tea Tea.", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },

    { logo: "/assets/icons/money.svg", uCase: 'B', tech: "SAS", method: "Statistics", year: '2013', heading: "Probability Calculations", shortDes: "anywhere online at from your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/investment.svg", uCase: 'C', tech: "SAS", method: "Statistics", year: '2013', heading: "Product Validation", shortDes: "from online at your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/pie-chart.svg", uCase: 'E', tech: "SAS", method: "Statistics", year: '2013', heading: "Root Cause Investigation", shortDes: "Take an online at your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/lamp.svg", uCase: 'D', tech: "SAS", method: "Statistics", year: '2013', heading: "Product Bioequivalence", shortDes: "self-paced online at your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },


    { logo: "/assets/icons/tea-cup.svg", uCase: 'Business Intelligence', tech: "SAS", method: "Machine Learning", year: '2015', heading: "SAS Business Intelligence", shortDes: "Learn online at your own pace", details: "Delivered an end to end BI solution for Royal Bank of Scotland (RBS) teams to monitor the performance of their financial products. I successfully managed an offshore team of six SAS developers to produce regular data marts, delivered seven SAS VA reports and outlined business proposal for future BI reporting. The SAS VA reports are used daily by the RBS Commercial and Private Banking teams to monitor product performance."},
    { logo: "/assets/icons/folder.svg", uCase: 'B', tech: "Python", method: "Machine Learning", year: '2015', heading: "Topic Modelling / Insurance", shortDes: "own pace Learn online at your", details: "Built an Latent Dirichlet Allocation (LDA) topic model visualised on a D3.js dashboard for customerclaims received by Esure car insurance. The solution enabled Esure senior management to betterunderstand common customer complaints/claims received through their Glasgow call centre, as wellas highlighting the value of text analytics to the Insurer.	" },
    { logo: "/assets/icons/tree.svg", uCase: 'E', tech: "Python", method: "Machine Learning", year: '2015', heading: "Warranty Claims", shortDes: "your online at own pace Learn", details: "Supported the delivery of a text classification algorithm for warranty claims received by JLR. The solution is used by JLR to direct warranty claims received by the car manufacturer to the appropriate business function." },
    { logo: "/assets/icons/pine.svg", uCase: 'Fraud', tech: "Spark", method: "Machine Learning", year: '2016', heading: "OTT Fraud", shortDes: "Built an automated fraud detection system", details: "I successfully designed, developed and deployed a fraud solution that enabled a UK content provider to identify the fraudulent use of one of their over-the-top content (OTT) services. Over a 12 month period, I successfully designed, developed and deployed a fraud solution which enabled Sky UK identify fraudulent use of their SkyGo service. With the aim to minimise the loss from content piracy, the solution helped Sky identify fake accounts, network attacks and illegal streaming which resulted in the closure of 500+ accounts. Based on the value delivered by the initial solution, additional four development phases were requested by Sky’s Group Security and Content Protection teams.  <br /><br />  I successfully designed, developed and deployed a fraud solution that enabled a UK content provider to identify the fraudulent use of one of their over-the-top content (OTT) services. Over a 12 month period, I successfully designed, developed and deployed a fraud solution which enabled Sky UK identify fraudulent use of their SkyGo service. With the aim to minimise the loss from content piracy, the solution helped Sky identify fake accounts, network attacks and illegal streaming which resulted in the closure of 500+ accounts. Based on the value delivered by the initial solution, additional four development phases were requested by Sky’s Group Security and Content Protection teams. <br /><br /> <strong>Toolset:</strong> Apache Hadoop and Spark Stack, Python, ElasticSearch, Kibana, Tableau, Git, Maven, Jenkin. " },
    { logo: "/assets/icons/love.svg", uCase: 'A', tech: "Python", method: "Deep Learning", year: '2017', heading: "Computer Vision (CV)", shortDes: "from anywhere your own pace Learn", details: "Computer vision proof of concept for Shell UK focused on analysing service station videos.  I delivered an automatic number plate recognition solution (includes identification of vehicle type, model, make, colour) using open source technology. Lead Data Scientist working on a video/image analytics proof of concept for Shell UK. Currently developing a solution to highlight the potential business value in analysing videos received from Shell’s retail service stations. All analysis is conducted using Python (Keras, Theano, Tensorflow, OpenCV)." },
    { logo: "/assets/icons/love.svg", uCase: 'A', tech: "Python/GCP", method: "Machine Learning", year: '2020', heading: "Customer Churn and Marketing and Cloud", shortDes: "from anywhere your own pace Learn", details: "Led an international team to migrate data from legacy systems into the cloud, train new customer behaviour models and execute an improved customer contact strategy for an Italian telecommunications company. Led an international team of 22 on a large-scale data transformation project for Wind Tre." },
    { logo: "/assets/icons/investment.svg", uCase: 'C', tech: "Spark/Azure", method: "Data Eng", year: '2020', heading: "Location Product Development", shortDes: "from online at your own pace Learn", details: "Created custom data products using user location and web browsing data to support the business to make a footprint in the B2B market. The data products were leveraged as assets with the business’s partners to generate a new stream of revenue." },
    { logo: "/assets/icons/pie-chart.svg", uCase: 'E', tech: "Spark/Azure", method: "Data Eng", year: '2020', heading: "App Usage & GDPR", shortDes: "Take an online at your own pace Learn", details: "Developed/automated numerous BI dashboards which enabled the business to understand the performance of their offers, marketing campaigns, data quality, customer consents/GDPR compliance and more." },
    { logo: "/assets/icons/lamp.svg", uCase: 'Business Intelligence', tech: "Spark/Azure", method: "Machine Learning", year: '2020', heading: "Business Intelligence", shortDes: "self-paced online at your own pace Learn", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },
    { logo: "/assets/icons/tea-cup.svg", uCase: 'A', tech: "Python/AWS", method: "Machine Learning", year: '2021', heading: "Furthers", shortDes: "Learn online at your own pace", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab."},
    { logo: "/assets/icons/folder.svg", uCase: 'B', tech: "Tech1", method: "Method2", year: '2021', heading: "Cost Calculation", shortDes: "own pace Learn online at your", details: "Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab. Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab<br /><br /> Learn online at your own pace from anywhere. Take an on-demand course or self-paced lab." },


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
    for (let i = 1; i <= 6; i++) {
      const _album = {
        src: "/assets/images/interests/interest-" + i + ".jpg",
        caption: this.imgName[i],
        thumb: "/assets/images/interests/interest-" + i + ".jpg"
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
    if (max > 100)
      this.pEnd = 100;
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
