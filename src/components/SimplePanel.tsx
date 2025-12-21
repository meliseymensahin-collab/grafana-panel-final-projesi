
import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2, useTheme2 } from '@grafana/ui';

interface Props extends PanelProps<SimpleOptions> {}

const getStyles = (theme: any, options: SimpleOptions) => {
  return {
    wrapper: css`
      font-family: 'Inter', sans-serif;
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 10px;
    `,
    title: css`
      font-weight: bold;
      margin-bottom: 20px;
      color: ${options.titleColor};
      font-size: ${options.titleSize}px;
      transition: all 0.3s ease;
      text-align: center;
      text-shadow: 0 2px 4px rgba(0,0,0,0.5);
    `,
    circle: css`
      width: 120px;
      height: 120px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      font-weight: bold;
      color: white;
      background-color: ${options.circleColor}; /* SADE RENK TASARIMI */
      transition: all 0.2s ease;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      &:hover {
        opacity: 0.9;
        transform: scale(1.05);
      }
    `,
    aiResult: css`
      margin-top: 20px;
      font-size: 14px;
      padding: 8px 12px;
      border-radius: 6px;
      background: ${theme.colors.background.primary};
      border: 1px solid ${theme.colors.border.weak};
      font-weight: 500;
    `,
    footer: css`
      position: absolute;
      bottom: 5px;
      font-size: 11px;
      opacity: 0.6;
      color: ${theme.colors.text.secondary};
    `
  };
};

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const theme = useTheme2();
  const styles = useStyles2(() => getStyles(theme, options));

  // Veriyi Grafana'dan al
  const series = data.series[0];
  const rawValue = series?.fields[0]?.values.get(series.fields[0].values.length - 1) || 0;
  
  // Büyük sayıları 0-100 arasına sığdır
  const lastValue = Math.abs(rawValue % 100);

  // AI Mantığı
  const isRisky = lastValue > options.threshold;

  const aiAnalyze = () => {
    if (isRisky) {
      return ` RİSKLİ DURUM (Limit: ${options.threshold})`;
    }
    return ` SİSTEM GÜVENLİ (Limit: ${options.threshold})`;
  };

  const handleClick = () => {
    alert(`RAPOR\n----------------\nDeğer: ${lastValue.toFixed(0)}\nDurum: ${isRisky ? 'KRİTİK' : 'NORMAL'}\n\nDeveloped by MELİS EYMEN ŞAHİN`);
  };

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <div className={styles.title}>{options.text}</div>

      <div className={styles.circle} onClick={handleClick}>
        {lastValue.toFixed(0)}
      </div>

      <div className={styles.aiResult} style={{ color: isRisky ? '#ff4d4f' : '#52c41a' }}>
        {aiAnalyze()}
      </div>

      <div className={styles.footer}>
        Developed by MELİS EYMEN ŞAHİN
      </div>
    </div>
  );
};



