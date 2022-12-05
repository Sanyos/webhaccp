import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ColdStorageProductEnum,
  DeliveryMethodEnum,
  DishToWashEnum,
  EggEnum,
  IngredientEnum,
  ProductPreparatoryEnum,
  RefigratorEnum,
  StorageEnum,
} from '../../../../../core/model/haccp.model';
@Component({
  selector: 'app-buffet-haccp-form',
  templateUrl: './buffet-haccp-form.component.html',
  styleUrls: ['./buffet-haccp-form.component.scss'],
})
export class BuffetHaccpFormComponent implements OnInit {
  @Input() ingredientsOptions: IngredientEnum;
  @Input() coldStorageProductOptions: ColdStorageProductEnum;
  @Input() productPreparatoryOptions: ProductPreparatoryEnum;
  @Input() eggOptions: any;
  @Input() deliveryMethodOptions: DeliveryMethodEnum;
  @Input() storageOptions: StorageEnum;
  @Input() refigratorOptions: any;
  @Input() dishToWashOptions: DishToWashEnum;
  @Output() haccpFormEvent: EventEmitter<FormGroup> = new EventEmitter();
  haccpForm: FormGroup;
  dressingRoomInfoText: string =
    '<p>§A befogadó nyilatkozat egy olyan írásban tett kijelentés, amely tartalmazza, hogy az ingatlan tulajdonosa a Vállalkozót befogadja, és feljogosítja az adott dolgozót/dolgozókat, hogy bizonyos helyiségeket (pl.: öltöző, személyzeti wc, raktár), használjanak. Tartalmaznia kell az adott vendéglátóipari egység adatait, a felek adatait, és magát a tényt, hogy a befogadott részére átadja a nem életvitelszerűen lakás céljára használt ingatlant/ingatlanrészt.§</p>';
  coldProductInfoText: string =
    '<div style="font-size: 12px; text-align: left;"><p><b>Cukrászati készítmény:</b> Nagyon sokféle cukrászkészítmény készül, melyek rendszerezése a sütemények jellegének megfelelően csoportokra osztható. Így megkülönböztetünk:</p><ul><li>uzsonnasüteményeket, melyeket az étkezési szokások megváltozásával már nem elsősorban az uzsonna időszakban fogyasztják az emberek, hanem inkább a reggeli étkezést szolgálják. Ide tartoznak a kalácsok, kuglófok, bukták, batyuk, piték.</li><li>kikészített süteményeket, torták, szeletek, tekercsek, minyonok, desszertek, csemegék, krémes és tejszínhabos sütemények, teasütemények.</li></ul><br /><br /><p><b>Hidegkonyhai készítmény:</b>A hidegkonyhai készítmények különböző konyhatechnológiai műveletekkel (sütés, főzés, párolás, hűtés stb…)ízlésesen, igényesen elkészített termékek. A készítésük nagy szakértelmet igényel, a hidegkonyhai szakácsok magas színvonalon folytatják mesterségüket. Ezek a termékek hidegen fogyaszthatóak. Jellemzőjük: gyorsan romlanak, ezért különös odafigyelést igényelnek a bolti árukezelés során.</p><br /><p>A hidegkonyhai termékekalapanyagai között megtalálhatjuk a különböző:</p><ul><li>zöldség- és gyümölcsféléket pl. sárgarépa, uborka, paprika, paradicsom, burgonya, hagyma, kukorica, bab, borsó, zeller, petrezselyemgyökér, karfiol, brokkoli, alma, körte, sárgabarack, őszibarack, nektarin, meggy, bogyósgyümölcsök – eper, ribizli, szeder; déligyümölcsök – narancs, banán, papaya, mangó, mandarin, kivi stb…</li><li>húsokat: marhahús, sertéshús, borjúhús, háziszárnyasok, bárányhús</li><li>halakat: sprotni, szardínia, hekk, hering, csuka stb… és hidegvérű állatokból készülő termékeket, pl. kaviár, szardellapaszta, tőkehalmáj</li><li>mártásokat: tejmártás (besamel), fehérmártás, barnamártás, paradicsommártás, majonéz alapú mártások, zománcmártás</li></ul><br /><p>A hidegkonyhaiáruk tulajdonságai:</p><ul><li>gyorsan romlanak, ezért ügyelni kell a hűtésre</li><li>elkészítésük különös szakértelmet igényel</li><li>bolti választékuk, értékesítésük megkönnyíti a háziasszonyok munkáját</li><li>fogyasztásuk változatossá teszi a táplálkozást és megfelel a mai kor korszerű táplálkozási igényeinek</li><li>alapanyagai sokoldalúsága miatt, különböző mennyiségben tartalmazzák a teljes értékű fehérjéket, vitaminokat, ásványi anyagokat, rostanyagokat.</li></ul></div>';
  constructor() {
    this.createForm();
  }

  ngOnInit(): void {
    this.haccpFormEvent.emit(this.haccpForm);
    this.haccpForm.controls['haccp_refrigerator'].valueChanges.subscribe(
      (values) => {
        if (values.includes('egg')) {
          delete this.eggOptions.noEgg;
        }
      }
    );

    this.haccpForm.controls['haccp_ingredients'].valueChanges.subscribe(
      (values) => {
        if (
          values.includes('mirelitBakedGoods') ||
          values.includes('mirelit')
        ) {
          delete this.refigratorOptions.noRefrigator;
        }
      }
    );
  }

  createForm(): void {
    this.haccpForm = new FormGroup({
      haccp_ingredients: new FormControl([], Validators.maxLength(255)),
      haccp_supply: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_require_keeping_cold: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_products_require_cold_storage: new FormControl(
        [],
        Validators.maxLength(255)
      ),
      haccp_require_keeping_warm: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_preparatory: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_storages: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_refrigerator: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_delivery: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_delivery_method: new FormControl([], Validators.maxLength(255)),
      haccp_dressing_room: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_cold_products: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_egg: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      haccp_dish_washing_up: new FormControl('', Validators.maxLength(255)),
    });
  }

  radioOptions = [
    { key: true, value: 'Igen' },
    { key: false, value: 'Nem' },
  ];
}
