import { Component, OnInit } from '@angular/core';
import { ClipboardValue } from '../dtos/clipboard-value';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {
  
  private static _values:ClipboardValue[] = [];

  private static overrideValuePosition:number = 0;
  
  get values():ClipboardValue[]{
    return ClipboardPage._values;
  }

  private static _alertCtrl:AlertController;

  constructor(private _alertCtrl:AlertController){
    ClipboardPage._alertCtrl = this._alertCtrl;
  }
  
  removeValue(value:ClipboardValue){
    let indexValue:number = ClipboardPage._values.indexOf(value);
    ClipboardPage._values.splice(indexValue, 1);
  }

  static async addValue(value:ClipboardValue){
    let valuesPositions = [];
    
    ClipboardPage._values.forEach((val, index) => {
      if(val.name.includes(value.name)){
        valuesPositions.push(index);
      }
    });

    if(valuesPositions.length > 0){
      let valueConflitAlert = await ClipboardPage._alertCtrl.create({
        header: 'Valor já existente',
        message: 'Já existe um valor com este nome na prancheta. Você deseja:',
        buttons:[
          { 
            text: 'Sobrescrever',
            handler: async () => {
              
              if(valuesPositions.length > 1){
                
                let selectValueOverrideInputs:any[] = ClipboardPage._values.filter((val, index) => valuesPositions.includes(index)).map((val, index) => {
                  return {
                    name: index.toString(),
                    type: 'radio',
                    label: val.name,
                    value: index
                  }
                });

                let valueToOverrideResponse = null;

                let overrideSelectValueAlert = await this._alertCtrl.create({
                  header: 'Substituir valor',
                  message: 'Qual dos valores a seguir deseja substituir',
                  inputs: selectValueOverrideInputs,
                  buttons:[
                    {
                      text:'OK', 
                      handler: async (valueSelectedIndex) => {
                        
                        let overrideConfirmed:boolean = false;

                        let overrideValueAlert = await this._alertCtrl.create({
                          header: 'Novo nome para o valor',
                          message: 'Qual o novo nome será atribuído á ',
                          inputs: [{
                            name: 'overrideInput',
                            placeholder: 'isso deve ser texto'
                          }],
                          buttons:[
                            {
                              text: 'OK',
                              handler:() => {
                                overrideConfirmed = true;
                              }
                            },{
                              text: 'Cancelar'
                            }
                          ]    
                        })
                        
                        await overrideValueAlert.present();

                        let overrideValueResponse = await overrideValueAlert.onDidDismiss();

                        if(overrideConfirmed){

                          console.log(ClipboardPage.overrideValuePosition);

                          value.name = overrideValueResponse.data.values.overrideInput;
                          let valueIndex = valuesPositions[valueSelectedIndex];
                          ClipboardPage._values[valueIndex] = value;
                        }
                      }
                    },{
                      text: 'Cancelar'
                    }
                  ]
                });

                await overrideSelectValueAlert.present();

                valueToOverrideResponse = await overrideSelectValueAlert.onDidDismiss();
                
                console.log(valueToOverrideResponse);
              }else{
                let uniquePosition = valuesPositions[0];
                ClipboardPage._values[uniquePosition] = value;
              }
              
            }
          }, 
          { 
            text: 'Adicionar novo',
            handler: () => {
              value.name += " (" + ( valuesPositions.length ) +")";
              ClipboardPage._values.push(value);
            }
          }, 
          'Cancelar'
        ]
      });

      await valueConflitAlert.present();

      return;
    }
    
    ClipboardPage._values.push(value);
  }
  
  static value(name: string): Number {
    return this._values.find( val => val.name == name).value;
  }

  static get allValuesKeys():string[]{
    
    const valuesNames = ClipboardPage._values.map(val => val.name);
    
    return valuesNames;
  }

  ngOnInit() {
  }

}
