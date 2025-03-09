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
  borderRadius: 8,
  spacing: {
    ...theme.spacing,
    controlHeight: 40
  },
  colors: {
    ...theme.colors,
    primary: '#115ab0',
    neutral60: 'var(--color-muted-foreground)'
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
          fontSize: 14,
          boxShadow: 'none'
        })
      }}
      components={{
        IndicatorSeparator: () => null
      }}
    />
  )
}
