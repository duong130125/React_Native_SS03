import { ViewStyle, TextStyle } from "react-native";

export const COLORS: { [key: string]: string } = {
  primary: "#2196F3",
  primaryDark: "#1976D2",
  secondary: "#FFC107",
  background: "#F5F5F5",
  card: "#FFFFFF",
  text: "#212121",
  subText: "#757575",
  white: "#FFFFFF",
  error: "#D32F2F",
};

export const FONT_SIZES: { [key: string]: number } = {
  tiny: 10,
  small: 12,
  medium: 14,
  large: 18,
  title: 20,
  h1: 24,
};

export const SPACING: { [key: string]: number } = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const CONTAINER_STYLES: {
  page: ViewStyle;
  centered: ViewStyle;
  card: ViewStyle;
} = {
  page: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: SPACING.md,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: SPACING.md,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
};

export default {
  COLORS,
  FONT_SIZES,
  SPACING,
  CONTAINER_STYLES,
};
