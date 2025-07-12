
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cream: {
					50: '#fefcf7',
					100: '#fdf8ee',
					200: '#fbf0d4',
					300: '#f8e7bb',
					400: '#f3d487',
					500: '#eec354',
					600: '#d6a83d',
					700: '#b38b32',
					800: '#8f6f29',
					900: '#755a22'
				},
				mocha: {
					50: '#f7f3f0',
					100: '#ede4db',
					200: '#d9c7b5',
					300: '#c5a88f',
					400: '#9d7043',
					500: '#8b5a2b',
					600: '#7a4d24',
					700: '#65401f',
					800: '#50331b',
					900: '#3d2717'
				},
				coffee: {
					50: '#f6f2f0',
					100: '#ebe1dc',
					200: '#d5c0b7',
					300: '#bf9e92',
					400: '#935b48',
					500: '#7d4a37',
					600: '#6a3e2e',
					700: '#583326',
					800: '#46281f',
					900: '#371f19'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				'slide-in-left': {
					"0%": {
						opacity: "0",
						transform: "translateX(-50px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				'slide-in-right': {
					"0%": {
						opacity: "0",
						transform: "translateX(50px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)"
					}
				},
				'float': {
					"0%, 100%": {
						transform: "translateY(0px)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				},
				'scroll': {
					"0%": {
						transform: "translateX(0)"
					},
					"100%": {
						transform: "translateX(-50%)"
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-left': 'slide-in-left 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'scroll': 'scroll 15s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
