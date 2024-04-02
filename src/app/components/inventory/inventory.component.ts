import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductTableComponent } from "../product-table/product-table.component";

@Component({
    selector: 'app-inventory',
    standalone: true,
    templateUrl: './inventory.component.html',
    styleUrl: './inventory.component.css',
    imports: [ProductTableComponent]
})
export class InventoryComponent {

  products: Product[] = [
    {
      "category": "Entertainment",
      "name": "Game Implement",
      "price": -9.768053876810095e-22,
      "quantity": -1.1422680664051284e-21
    },
    {
      "category": "Entertainment",
      "name": "Party Apparatus",
      "price": -28032976663085056,
      "quantity": 49156.3359375
    },
    {
      "category": "Health",
      "name": "Medicine Implement",
      "price": 5.007657656254381e-32,
      "quantity": 1.3452082369358805e+35
    },
    {
      "category": "Activity",
      "name": "Outdoors Paraphernalia",
      "price": -27132184,
      "quantity": 4.558994311216958e-33
    },
    {
      "category": "Home",
      "name": "Home Improvement Device",
      "price": 17743124801653834000,
      "quantity": -1.4045867446556516e+25
    },
    {
      "category": "Activity",
      "name": "Camping Accessory",
      "price": 24389770,
      "quantity": 1.84233418477913e-27
    },
    {
      "category": "Activity",
      "name": "Sports Rig",
      "price": -1.6146174660679345e-23,
      "quantity": 2.132603492707596e+22
    },
    {
      "category": "Home",
      "name": "Furniture Contraption",
      "price": 675041687633920,
      "quantity": 2.0041265139058287e+23
    },
    {
      "category": "Electronics",
      "name": "Camera Item",
      "price": -1.3566690683364868,
      "quantity": 1.7068805500884926e-15
    },
    {
      "category": "Beauty",
      "name": "Bath Apparatus",
      "price": -1.2239425112035464e-34,
      "quantity": 7.745449542999268
    },
    {
      "category": "Health",
      "name": "First Aid Thingamajig",
      "price": -14088.0263671875,
      "quantity": 1.5476499795913696
    },
    {
      "category": "Health",
      "name": "Medicine Accessory",
      "price": 4.5464707984302657e+30,
      "quantity": -1.319339759414217e-17
    },
    {
      "category": "Home",
      "name": "Cooking Equipment",
      "price": -1.6687723633145735e-21,
      "quantity": -747031177986048
    },
    {
      "category": "Clothing",
      "name": "Womens Implement",
      "price": 426939609151176700,
      "quantity": 16665604096
    },
    {
      "category": "Activity",
      "name": "Camping Attachment",
      "price": -858.0601806640625,
      "quantity": -432501.5625
    },
    {
      "category": "Health",
      "name": "Nutrition Doodad",
      "price": 456027979537973250,
      "quantity": -1441046
    },
    {
      "category": "Home",
      "name": "Cleaning Accessory",
      "price": 3.615691681033286e+35,
      "quantity": -791.250732421875
    },
    {
      "category": "Pets",
      "name": "Cat Implement",
      "price": -64250.8515625,
      "quantity": 7.4316984461541655e-34
    },
    {
      "category": "Entertainment",
      "name": "Movie Gear",
      "price": 43964108776065204000,
      "quantity": 38699852
    },
    {
      "category": "Entertainment",
      "name": "Party Widget",
      "price": -6.215048454741715e+35,
      "quantity": 1.5219887919100827e+23
    },
    {
      "category": "Activity",
      "name": "Biking Thingamajig",
      "price": -3.7065391375620844e-25,
      "quantity": -5.959400889177309e-30
    },
    {
      "category": "Clothing",
      "name": "Jewelry Mechanism",
      "price": -2.2095842341289435e-38,
      "quantity": -1.319189789532342e-30
    },
    {
      "category": "Clothing",
      "name": "Womens Apparatus",
      "price": 1.6730264522307379e-18,
      "quantity": 3.0075278800723027e-7
    },
    {
      "category": "Home",
      "name": "Home Improvement Mechanism",
      "price": -17923442,
      "quantity": 9.220927810679126e-35
    },
    {
      "category": "Activity",
      "name": "Swimming Tool",
      "price": 4.5961089903521875e+30,
      "quantity": 2.2879808820093557e-32
    },
    {
      "category": "Activity",
      "name": "Swimming Rig",
      "price": 1.982330583165088e-20,
      "quantity": -5073074.5
    },
    {
      "category": "Clothing",
      "name": "Womens Gizmo",
      "price": -4.0231022965030234e+23,
      "quantity": -1.7910131179543654e+33
    },
    {
      "category": "Clothing",
      "name": "Womens Accessory",
      "price": 3311175168,
      "quantity": -5.556192658739967e-12
    },
    {
      "category": "Clothing",
      "name": "Jewelry Implement",
      "price": -8.425634135866475e-35,
      "quantity": -9.249362559280155e-25
    },
    {
      "category": "Entertainment",
      "name": "Party Supplies",
      "price": -7176533.5,
      "quantity": 1.448939949280117e+38
    },
    {
      "category": "Home",
      "name": "Home Improvement Item",
      "price": 2.687167229010287e-33,
      "quantity": 0.00042667886009439826
    },
    {
      "category": "Activity",
      "name": "Beach Whatchamacallit",
      "price": 793838805319680,
      "quantity": 24.513704299926758
    },
    {
      "category": "Clothing",
      "name": "Kids Accessory",
      "price": -1.510007785739834e-17,
      "quantity": 3.2579117600386705e+28
    },
    {
      "category": "Pets",
      "name": "Cat Attachment",
      "price": -1.2887030278791297e+32,
      "quantity": 45338084894413160000
    },
    {
      "category": "Activity",
      "name": "Fitness Widget",
      "price": -12027099199892881000,
      "quantity": -1.70177668987046e-31
    },
    {
      "category": "Automotive",
      "name": "Car Mechanism",
      "price": 0.00003132603887934238,
      "quantity": 1.7135463817460287e-15
    },
    {
      "category": "Electronics",
      "name": "Camera Supplies",
      "price": -7.828127641460029e-19,
      "quantity": 0.000019140356016578153
    },
    {
      "category": "Entertainment",
      "name": "Book Instrument",
      "price": -1625976.875,
      "quantity": -4.406647074272338e+37
    },
    {
      "category": "Pets",
      "name": "Cat Gizmo",
      "price": 201746098841827930000,
      "quantity": 1.9697136335646777e+38
    },
    {
      "category": "Activity",
      "name": "Camping Accessory",
      "price": -2.7669452901415473e+30,
      "quantity": 2.223040733332377e-33
    },
    {
      "category": "Home",
      "name": "Kitchen Attachment",
      "price": 0.4905166029930115,
      "quantity": -1.0483472076008927e+27
    },
    {
      "category": "Activity",
      "name": "Fitness Machine",
      "price": 828108.75,
      "quantity": 5.4658599694945575e-12
    },
    {
      "category": "Pets",
      "name": "Cat Item",
      "price": 3.057174928163449e+35,
      "quantity": 15.627922058105469
    },
    {
      "category": "Activity",
      "name": "Camping Equipment",
      "price": 9.664897365016208e+27,
      "quantity": 1.5732393876533024e-7
    },
    {
      "category": "Activity",
      "name": "Swimming Attachment",
      "price": -78767595674664960,
      "quantity": -3.3181030417551266e-27
    },
    {
      "category": "Clothing",
      "name": "Womens Mechanism",
      "price": 1.0037993353195773e-10,
      "quantity": 3.954878721610971e-19
    },
    {
      "category": "Entertainment",
      "name": "Party Supplies",
      "price": -2.1310658091670592e-16,
      "quantity": -5.830968303685569e-13
    },
    {
      "category": "Health",
      "name": "Vitamin Accessory",
      "price": 1.0526224846497612e-18,
      "quantity": 7.907160379806434e-27
    },
    {
      "category": "Clothing",
      "name": "Womens Doodad",
      "price": 2.5333449527983627e-25,
      "quantity": -66629778014208
    },
    {
      "category": "Beauty",
      "name": "Skin Care Device",
      "price": -5.176474445181169e-27,
      "quantity": 4.3726274157052103e-7
    },
    {
      "category": "Home",
      "name": "Home Improvement Gear",
      "price": -1.0863881951157783e-14,
      "quantity": 8842191696469950000
    },
    {
      "category": "Home",
      "name": "Furniture Device",
      "price": -2.926031505978699e-8,
      "quantity": 7.954612731933594
    },
    {
      "category": "Activity",
      "name": "Outdoors Implement",
      "price": 26.377456665039062,
      "quantity": -18182348910624768000
    },
    {
      "category": "Home",
      "name": "Cleaning Gadget",
      "price": 31340152,
      "quantity": -14194908419843949000
    },
    {
      "category": "Electronics",
      "name": "Computer Widget",
      "price": -4.9550855992245895e-30,
      "quantity": 25617356800
    },
    {
      "category": "Activity",
      "name": "Camping Device",
      "price": 1.6986783806352802e-32,
      "quantity": -2.848975637055233e+36
    },
    {
      "category": "Activity",
      "name": "Beach Rig",
      "price": -2.8459774177783748e+29,
      "quantity": -1.4423455274543628e-33
    },
    {
      "category": "Electronics",
      "name": "Phone Gadget",
      "price": -1.0795116448220225e-18,
      "quantity": -1233064.5
    },
    {
      "category": "Health",
      "name": "Medicine Tool",
      "price": 0.00040195207111537457,
      "quantity": -0.0007543510873802006
    },
    {
      "category": "Pets",
      "name": "Dog Equipment",
      "price": -2.4745866482729757e-24,
      "quantity": -6.961336230068928e+36
    },
    {
      "category": "Home",
      "name": "Dining Gizmo",
      "price": -0.7800632119178772,
      "quantity": -9.602426802127804e+26
    },
    {
      "category": "Electronics",
      "name": "Phone Doodad",
      "price": 1.2870693436323131e+36,
      "quantity": -1.5858632169085646e-34
    },
    {
      "category": "Entertainment",
      "name": "Movie Item",
      "price": -2.7072714473449076e-30,
      "quantity": 244850515509248
    },
    {
      "category": "Automotive",
      "name": "Car Equipment",
      "price": 2.8950396225267683e-13,
      "quantity": 1.0571199433081415e-38
    },
    {
      "category": "Electronics",
      "name": "Computer Thingamajig",
      "price": 1.743570956486997e-27,
      "quantity": -1.9527498429396649e-28
    },
    {
      "category": "Electronics",
      "name": "Phone Accessory",
      "price": 1.3875610978634947e-19,
      "quantity": 0.006231441628187895
    },
    {
      "category": "Activity",
      "name": "Fitness Machine",
      "price": -0.7423422336578369,
      "quantity": -7.58675784316414e+30
    },
    {
      "category": "Entertainment",
      "name": "Movie Tool",
      "price": 8.835496161452254e+35,
      "quantity": 84598139879224770000
    },
    {
      "category": "Electronics",
      "name": "Camera Gadget",
      "price": 3381379328,
      "quantity": 6.887014547563959e-27
    },
    {
      "category": "Clothing",
      "name": "Kids Tool",
      "price": -1.7392684694833165e-16,
      "quantity": 6.093875766750474e-27
    },
    {
      "category": "Home",
      "name": "Kitchen Rig",
      "price": -4.049360361169335e+33,
      "quantity": 1.8735461537744413e-7
    },
    {
      "category": "Activity",
      "name": "Biking Instrument",
      "price": -2.6484232016656117e-13,
      "quantity": -1.5427137611823127e-7
    },
    {
      "category": "Electronics",
      "name": "Camera Instrument",
      "price": 0.0000022687231648887973,
      "quantity": 26.178634643554688
    },
    {
      "category": "Clothing",
      "name": "Mens Doodad",
      "price": -195863342059880450,
      "quantity": -6.066038953174914e-22
    },
    {
      "category": "Activity",
      "name": "Beach Thingamajig",
      "price": -5324506624,
      "quantity": -33270526
    },
    {
      "category": "Automotive",
      "name": "Car Machine",
      "price": 0.00010422108607599512,
      "quantity": -7.619203976563185e+28
    },
    {
      "category": "Beauty",
      "name": "Skin Care Whatchamacallit",
      "price": -9.879116937688301e+30,
      "quantity": 4163129.5
    },
    {
      "category": "Pets",
      "name": "Cat Kit",
      "price": 1.120450896853508e-29,
      "quantity": 1311.72216796875
    },
    {
      "category": "Home",
      "name": "Cooking Paraphernalia",
      "price": -3.445173634663266e-16,
      "quantity": -1.2884543550323522e-28
    },
    {
      "category": "Automotive",
      "name": "Car Kit",
      "price": 0.05023165047168732,
      "quantity": -458294003458709100000
    },
    {
      "category": "Home",
      "name": "Kitchen Device",
      "price": 0.00016278630937449634,
      "quantity": 4.577995350878535e-34
    },
    {
      "category": "Home",
      "name": "Cooking Component",
      "price": 7601528.5,
      "quantity": 3.098358703173427e+30
    },
    {
      "category": "Clothing",
      "name": "Mens Instrument",
      "price": -5.947326986226514e+35,
      "quantity": 1.1782438372194325e+36
    },
    {
      "category": "Activity",
      "name": "Biking Implement",
      "price": -0.15466390550136566,
      "quantity": 1.0149728613135689e+24
    },
    {
      "category": "Beauty",
      "name": "Makeup Whatchamacallit",
      "price": -2.2890205987971592e-21,
      "quantity": -8.885124050162037e-38
    },
    {
      "category": "Home",
      "name": "Dining Rig",
      "price": 2.749678990879626e+33,
      "quantity": 263407248
    },
    {
      "category": "Entertainment",
      "name": "Book Machine",
      "price": 3.988019605317484e+29,
      "quantity": -4.0133588399548216e-19
    },
    {
      "category": "Home",
      "name": "Cooking Whatchamacallit",
      "price": 3.5940780470098845e-38,
      "quantity": 1.7670575422114806e-37
    },
    {
      "category": "Clothing",
      "name": "Baby Mechanism",
      "price": 9321833,
      "quantity": -1.0549400001458602e+27
    },
    {
      "category": "Home",
      "name": "Furniture Accessory",
      "price": 1.0193322500603787e+29,
      "quantity": 1.7436806321884286e-23
    },
    {
      "category": "Health",
      "name": "Nutrition Apparatus",
      "price": 4151.8896484375,
      "quantity": -3.2371708051302866e+21
    },
    {
      "category": "Clothing",
      "name": "Jewelry Component",
      "price": 0.006188838742673397,
      "quantity": -1.930680979176867e+29
    },
    {
      "category": "Automotive",
      "name": "Engine Gear",
      "price": -814745331727073300,
      "quantity": 1.5136193519369987e-20
    },
    {
      "category": "Automotive",
      "name": "Car Whatchamacallit",
      "price": 143210.5625,
      "quantity": 64918085632
    },
    {
      "category": "Activity",
      "name": "Biking Gizmo",
      "price": 455.8937683105469,
      "quantity": 3.767694881509578e+32
    },
    {
      "category": "Entertainment",
      "name": "Party Machine",
      "price": -2512163147087872,
      "quantity": 5.1436598779897585e+35
    },
    {
      "category": "Clothing",
      "name": "Womens Gadget",
      "price": 4.322471696988464e-32,
      "quantity": -1.3702609996195746e-33
    },
    {
      "category": "Clothing",
      "name": "Kids Gizmo",
      "price": -3.566599186862687e-22,
      "quantity": -501339127808
    },
    {
      "category": "Home",
      "name": "Bedding Equipment",
      "price": -948592.875,
      "quantity": 1.467608787456929e-19
    },
    {
      "category": "Home",
      "name": "Kitchen Tool",
      "price": 6.239849824214877e-25,
      "quantity": 5589511.5
    }
  ]

  categories: Set<string> = this.categoryClassifier(this.products);
  classifiedProducts: Map<string, Product[]> = this.productsByCategory(this.products, this.categories);
  
 

  private categoryClassifier(products: Product[]): Set<string> {
    const categories = new Set<string>();
    products.forEach((product) => {
      categories.add(product.category);
    });
    return categories;
  }

  private productsByCategory(products: Product[], categories: Set<string>): Map<string, Product[]> {
    const classifiedProducts = new Map<string, Product[]>();
    categories.forEach((category) => {
      const productsInCategory = products.filter((product) => product.category === category);
      classifiedProducts.set(category, productsInCategory);
    });
    return classifiedProducts;
  }

}


