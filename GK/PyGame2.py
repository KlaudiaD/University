import pygame
import sys

# Initialize Pygame
pygame.init()

# Set up the display
screen_size = (600, 600)
screen = pygame.display.set_mode(screen_size)
pygame.display.set_caption('Red Z Shape')

# Colors
red = (255, 0, 0)
background_color = (255, 255, 255)

# Fill the background
screen.fill(background_color)

# Define the positions for the "Z" shape
start_top = (150, 150)
end_top = (450, 150)
start_bottom = (150, 450)
end_bottom = (450, 450)
cross_start = (450, 150)
cross_end = (150, 450)

# Drawing the "Z" shape
pygame.draw.line(screen, red, start_top, end_top, 8)
pygame.draw.line(screen, red, start_bottom, end_bottom, 8)
pygame.draw.line(screen, red, cross_start, cross_end, 8)

# Update the display
pygame.display.flip()

# Main loop to keep the window open
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

pygame.quit()
