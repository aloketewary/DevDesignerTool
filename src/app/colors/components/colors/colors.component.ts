import { Component, OnInit, ViewEncapsulation, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  clickedPrimary: any;
  clickedSecondary: any;
  materialColors = new Array<any>();
  constructor(
    private renderer2: Renderer2
  ) { }

  ngOnInit() {
    this.materialColors = [
      {
        color: 'Red',
        variations: [
          {
            color: '#000000',
            isPrimary: true,
            weight: 50,
            hex: '#FFEBEE'
          },
          {
            color: '#000000',
            isPrimary: true,
            weight: 100,
            hex: '#FFCDD2'
          },
          {
            color: '#000000',
            isPrimary: true,
            weight: 200,
            hex: '#EF9A9A'
          },
          {
            color: '#000000',
            isPrimary: true, weight: 300,
            hex: '#E57373'
          },
          {
            color: '#000000',
            isPrimary: true, weight: 400,
            hex: '#EF5350'
          },
          {
            color: '#000000',
            isPrimary: true, weight: 500,
            hex: '#F44336'
          },
          {
            color: '#000000',
            isPrimary: true, weight: 600,
            hex: '#E53935'
          },
          {
            color: '#FFFFF',
            isPrimary: true, weight: 700,
            hex: '#D32F2F'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#C62828'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#B71C1C'
          }
        ]
      },
      {
        color: 'Pink',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#FCE4EC'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#F8BBD0'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#F48FB1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#F06292'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#EC407A'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#E91E63'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#D81B60'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#C2185B'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#AD1457'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#880E4F'
          }
        ]
      },
      {
        color: 'Purple',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#F3E5F5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#E1BEE7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#CE93D8'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#BA68C8'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#AB47BC'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#9C27B0'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#8E24AA'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#7B1FA2'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#6A1B9A'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#4A148C'
          }
        ]
      },
      {
        color: 'Deep Purple',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#EDE7F6'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#D1C4E9'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#B39DDB'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#9575CD'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#7E57C2'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#673AB7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#5E35B1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#512DA8'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#4527A0'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#311B92'
          }
        ]
      },
      {
        color: 'Indigo',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#E8EAF6'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#C5CAE9'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#9FA8DA'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#7986CB'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#5C6BC0'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#3F51B5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#3949AB'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#303F9F'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#283593'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#1A237E'
          }
        ]
      },
      {
        color: 'Blue',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#E3F2FD'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#BBDEFB'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#90CAF9'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#64B5F6'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#42A5F5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#2196F3'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#1E88E5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#1976D2'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#1565C0'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#0D47A1'
          }
        ]
      },
      {
        color: 'Light Blue',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#E1F5FE'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#B3E5FC'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#81D4FA'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#4FC3F7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#29B6F6'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#03A9F4'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#039BE5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#0288D1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#0277BD'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#01579B'
          }
        ]
      },
      {
        color: 'Cyan',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#E0F7FA'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#B2EBF2'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#80DEEA'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#4DD0E1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#26C6DA'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#00BCD4'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#00ACC1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#0097A7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#00838F'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#006064'
          }
        ]
      },
      {
        color: 'Teal',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#E0F2F1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#B2DFDB'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#80CBC4'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#4DB6AC'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#26A69A'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#009688'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#00897B'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#00796B'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#00695C'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#004D40'
          }
        ]
      },
      {
        color: 'Green',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#E8F5E9'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#C8E6C9'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#A5D6A7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#81C784'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#66BB6A'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#4CAF50'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#43A047'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#388E3C'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#2E7D32'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#1B5E20'
          }
        ]
      },
      {
        color: 'Light Green',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#F1F8E9'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#DCEDC8'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#C5E1A5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#AED581'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#9CCC65'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#8BC34A'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#7CB342'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#689F38'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#558B2F'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#33691E'
          }
        ]
      },
      {
        color: 'Lime',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#F9FBE7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#F0F4C3'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#E6EE9C'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#DCE775'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#D4E157'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#CDDC39'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#C0CA33'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#AFB42B'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#9E9D24'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#827717'
          }
        ]
      },
      {
        color: 'Yellow',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#FFFDE7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#FFF9C4'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#FFF59D'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#FFF176'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#FFEE58'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#FFEB3B'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#FDD835'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#FBC02D'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#F9A825'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#F57F17'
          }
        ]
      },
      {
        color: 'Amber',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#FFF8E1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#FFECB3'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#FFE082'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#FFD54F'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#FFCA28'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#FFC107'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#FFB300'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#FFA000'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#FF8F00'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#FF6F00'
          }
        ]
      },
      {
        color: 'Orange',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#FFF3E0'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#FFE0B2'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#FFCC80'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#FFB74D'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#FFA726'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#FF9800'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#FB8C00'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#F57C00'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#EF6C00'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#E65100'
          }
        ]
      },
      {
        color: 'Deep Orange',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#FBE9E7'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#FFCCBC'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#FFAB91'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#FF8A65'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#FF7043'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#FF5722'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#F4511E'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#E64A19'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#D84315'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#BF360C'
          }
        ]
      },
      {
        color: 'Brown',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#EFEBE9'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#D7CCC8'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#BCAAA4'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#A1887F'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#8D6E63'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#795548'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#6D4C41'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#5D4037'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#4E342E'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#3E2723'
          }
        ]
      },
      {
        color: 'Grey',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#FAFAFA'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#F5F5F5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#EEEEEE'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#E0E0E0'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#BDBDBD'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#9E9E9E'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#757575'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#616161'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#424242'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#212121'
          }
        ]
      },
      {
        color: 'Blue Grey',
        variations: [
          {
            color: '#FFFFF', isPrimary: true, weight: 50,
            hex: '#ECEFF1'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 100,
            hex: '#CFD8DC'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 200,
            hex: '#B0BEC5'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 300,
            hex: '#90A4AE'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 400,
            hex: '#78909C'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 500,
            hex: '#607D8B'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 600,
            hex: '#546E7A'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 700,
            hex: '#455A64'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 800,
            hex: '#37474F'
          },
          {
            color: '#FFFFF', isPrimary: true, weight: 900,
            hex: '#263238'
          }
        ]
      }
    ];
  }

  // For Material Card shadow handle not own specific css trick
  matElevationAdd(ev: Event) {
    this.renderer2.addClass(ev.target, 'mat-elevation-z12');
  }

  matElevationRemove(ev: Event) {
    this.renderer2.removeClass(ev.target, 'mat-elevation-z12');
  }

  cardClicked(col) {
    if (col.isPrimary) {
      this.clickedPrimary = col;
    } else {
      this.clickedSecondary = col;
    }
  }


}
