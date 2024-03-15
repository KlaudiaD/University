import math
import pygame

pygame.init()

screen_width = 600
screen_height = 600
screen = pygame.display.set_mode((screen_width, screen_height))

SCREEN_COLOR = (10, 10, 10)
BLACK = (5, 5, 5)
YELLOW = (230, 210, 0)


def rotate_point(cx, cy, x, y, angle):
    radians = math.radians(angle)
    sin_a = math.sin(radians)
    cos_a = math.cos(radians)
    x -= cx
    y -= cy
    new_x = x * cos_a - y * sin_a + cx
    new_y = x * sin_a + y * cos_a + cy
    return new_x, new_y


def draw_polygon(surface, n, radius, position, rotation=0, scale=(1, 1), tilt=0, extra_rotation=0, tilt_factor=0):
    points = []
    cx, cy = position
    for i in range(n):
        angle = 2 * math.pi * i / n + rotation
        x = cx + radius * math.cos(angle) * scale[0]
        y = cy + radius * math.sin(angle) * scale[1]

        if tilt != 0:
            x += tilt * math.sin(angle)

        if extra_rotation != 0:
            x, y = rotate_point(cx, cy, x, y, extra_rotation)

        if tilt_factor != 0:
            y += tilt_factor * (x - cx)

        points.append((x, y))
    pygame.draw.polygon(surface, BLACK, points)


def reset_transform():
    return 0, (1, 1), 0, 0, 0, (screen_width // 2, screen_height // 2)


def shrink_transform():
    return 0, (0.6, 0.6), 0, 0, 0, (screen_width // 2, screen_height // 2)


def rotate_35_transform():
    return math.radians(35), (1, 1), 0, 0, 0, (screen_width // 2, screen_height // 2)


def rotate_180_stretch_and_mirror_transform():
    return math.radians(180), (-0.5, 1), 0, 0, 0, (screen_width // 2, screen_height // 2)


def tilt_transform():
    return 0, (1, 1), 40, 0, 0, (screen_width // 2, screen_height // 2)


def scale_half_and_move_to_top_transform(radius):
    new_position = (screen_width // 2, 100 + radius * 0.5)
    return 0, (1, 0.5), 0, 0, 0, new_position


def tilt_and_rotate_90_transform():
    # Apply tilt and then rotate by 90 degrees
    return 0, (1, 1), 40, 90, 0, (screen_width // 2, screen_height // 2)


def rotate_180_stretch_transform():
    return math.radians(180), (0.5, 1), 0, 0, 0, (screen_width // 2, screen_height // 2)


def scale_half_and_tilt_transform():
    position = (screen_width // 2, screen_height // 2 + 80)
    return 0, (1, 0.5), 0, 30, 0, position


def rotate_180_and_tilt_top_bottom_transform():
    x_offset = radius * math.cos(math.pi * 2 / n)
    position = (screen_width - 111 - x_offset, screen_height // 2)
    return math.radians(180), (1, 1), 0, 0, 0.5, position

n = 15
radius = 150
position = (screen_width // 2, screen_height // 2)
rotation = 0
scale = (1, 1)
tilt = 0
extra_rotation = 0
tilt_factor = 0

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                running = False
            elif event.key == pygame.K_0:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = reset_transform()
            elif event.key == pygame.K_1:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = shrink_transform()
            elif event.key == pygame.K_2:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = rotate_35_transform()
            elif event.key == pygame.K_3:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = rotate_180_stretch_and_mirror_transform()
            elif event.key == pygame.K_4:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = tilt_transform()
            elif event.key == pygame.K_5:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = scale_half_and_move_to_top_transform(radius)
            elif event.key == pygame.K_6:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = tilt_and_rotate_90_transform()
            elif event.key == pygame.K_7:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = rotate_180_stretch_transform()
            elif event.key == pygame.K_8:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = scale_half_and_tilt_transform()
            elif event.key == pygame.K_9:
                rotation, scale, tilt, extra_rotation, tilt_factor, position = rotate_180_and_tilt_top_bottom_transform()

    screen.fill(SCREEN_COLOR)
    pygame.draw.rect(screen, YELLOW, (100, 100, 400, 400))
    draw_polygon(screen, n, radius, position, rotation, scale, tilt, extra_rotation,
                 tilt_factor)
    pygame.display.flip()

    pygame.time.Clock().tick(60)

pygame.quit()
