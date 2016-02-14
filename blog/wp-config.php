<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'nayokzyv_wp471');

/** MySQL database username */
define('DB_USER', 'nayokzyv_wp471');

/** MySQL database password */
define('DB_PASSWORD', '27z37@@S0P');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'v6htoaaiq2qu8ukq5xa1flknsega7rp48gxwakkurwglfeto9qvyhdza6gtax8mb');
define('SECURE_AUTH_KEY',  'cwup9xjhx5ytpy8xoc1hmxusm7nzdwkg5b2tgz8ailikzchc831f1qchnmkkdkjd');
define('LOGGED_IN_KEY',    '4dlnh6o05yax3la8n1h2tgfu5tzaefjbwmxu4kmom6dcsoaaycsa8jkxoj0xztqu');
define('NONCE_KEY',        'gcp5hnnsmqcdktphdcfgutdmxjdikzmhwymwnmqr0dfewhjm0htqdexlmmqsewvm');
define('AUTH_SALT',        '5l5kh1dndlnvk3rj26jo6btwzd4iypc3ax2p5dqgmickaxg0x1a5xk8prmpvxhcn');
define('SECURE_AUTH_SALT', 'cggov0wvuxid0y0psnkh4o1bcaslox4pw4alitsqe2z45ilwovrjwaln8rfoutnd');
define('LOGGED_IN_SALT',   'j7balmzelraf4fo3kjxacburk12olsebndeu2qqhfgpazuav0myvqgjyhqqjecuf');
define('NONCE_SALT',       'wvndj4flabhfpbwgbpeqvosr7mvpsyr07d7qigmqow8qqhjsz1yc3psavrstzjkm');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
