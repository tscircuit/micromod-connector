import type { ChipProps } from "@tscircuit/props"

const pinLabels = {
  pin73: "V3_3",
  pin72: "VCC",

  pin71: "PWR_EN",
  pin70: "USB_VIN",
  pin37: "USBHOST_D_NEG",
  pin35: "USBHOST_D_POS",
  pin43: "CAN_TX",
  pin41: "CAN_RX",

  pin36: "EEPROM_A0",
  pin34: "EEPROM_A1",
  pin32: "EEPROM_A2",

  pin1: "GND",

  pin3: "SPI_SCK",
  pin7: "SPI_SDO",
  pin5: "SPI_SDI",

  pin23: "I2C_INT",
  pin21: "I2C_SCL",
  pin19: "I2C_SDA",

  pin15: "RX",
  pin13: "TX",

  pin18: "CTS",
  pin16: "RTS",
  pin38: "A0",
  pin47: ["G0","INT"],
  pin49: ["G1","CS"],
  pin51: ["G2","PWM"],
  pin53: "G3",
  pin55: "G4",
  pin57: "G5",
  pin59: "G6",
  pin61: "G7",
} as const

const Connector = (props: ChipProps<typeof pinLabels>) => {
  return (
    <chip
      footprint="m2host"
      pinLabels={pinLabels}
      showPinAliases
      schPinArrangement={{
        leftSide: {
          pins: [
            "pin73",
            "pin72",
            "pin71",
            "pin70",
            "pin37",
            "pin35",
            "pin43",
            "pin41",
            "pin36",
            "pin34",
            "pin32",
            "pin1",
          ],
          direction: "top-to-bottom",
        },
        rightSide: {
          pins: [
            "pin3",
            "pin7",
            "pin5",
            "pin23",
            "pin21",
            "pin19",
            "pin15",
            "pin13",
            "pin18",
            "pin16",
            "pin38",
            "pin47",
            "pin49",
            "pin51",
            "pin53",
            "pin55",
            "pin57",
            "pin59",
            "pin61",
          ],
          direction: "top-to-bottom",
        },
      }}
      schPinStyle={{
        pin72: {
          marginBottom: 0.5,
        },
        pin71: {
          marginBottom: 0.5,
        },
        pin35: {
          marginBottom: 0.2,
        },
        pin41: {
          marginBottom: 0.2,
        },
        pin32: {
          marginBottom: 0.5,
        },
        pin5: {
          marginBottom: 0.2,
        },
        pin19: {
          marginBottom: 0.2,
        },
        pin16: {
          marginBottom: 0.2,
        },
        pin38: {
          marginBottom: 0.2,
        },
      }}
      {...props}
    />
  )
}

export default Connector
