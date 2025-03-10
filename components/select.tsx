import { ComponentProps, FC } from 'react'
import Select, { ThemeConfig } from 'react-select'

export type SelectOptionType = {
  value: string
  label: string
}

export interface SelectProps
  extends ComponentProps<typeof Select<SelectOptionType | null, false>> {
  value: SelectOptionType | null
}

export const selectTheme: ThemeConfig = (theme) => ({
  ...theme,
  borderRadius: 10,
  spacing: {
    ...theme.spacing,
    controlHeight: 40
  },
  colors: {
    ...theme.colors,
    primary: '#9ab5f5',
    neutral60: 'var(--color-muted-foreground)',
    neutral50: 'var(--color-muted-foreground)',
    neutral20: 'var(--color-input)'
  }
})

export const CustomSelect: FC<SelectProps> = ({
  placeholder = 'Selecione...',
  ...restProps
}) => {
  const handleNoOptionMessage = ({ inputValue }: { inputValue: string }) => {
    if (inputValue) {
      return `Nenhuma  para o termo '${inputValue}'`
    }
    return 'Nenhuma opção'
  }

  return (
    <Select
      {...restProps}
      theme={selectTheme}
      placeholder={placeholder}
      noOptionsMessage={handleNoOptionMessage}
      styles={{
        control: (styles) => ({
          ...styles,
          fontSize: 14
        }),
        option: (styles, { isSelected }) => ({
          ...styles,
          color: isSelected ? 'var(--color-foreground)' : styles.color
        })
      }}
      components={{
        IndicatorSeparator: () => null
      }}
    />
  )
}
