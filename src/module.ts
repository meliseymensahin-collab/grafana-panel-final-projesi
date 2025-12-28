import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Panel Başlığı',
      defaultValue: 'Sistem Durumu',
    })
    .addColorPicker({
      path: 'titleColor',
      name: 'Başlık Rengi',
      defaultValue: '#ffffff',
    })
    .addSliderInput({
      path: 'titleSize',
      name: 'Başlık Boyutu',
      defaultValue: 24,
      settings: {
        min: 10,
        max: 60,
        step: 1,
      },
    })
    .addColorPicker({
      path: 'circleColor',
      name: 'Daire Rengi',
      defaultValue: '#32a852',
    })
    .addSliderInput({
      path: 'threshold',
      name: 'AI Risk Limiti',
      defaultValue: 50,
      settings: {
        min: 0,
        max: 100,
        step: 1,
      },
    });
});
