<?php
/*
 * @wordpress-plugin
 * Plugin Name:       IWS Custom Code
 * Description:       Add Custom code
 * Author:            Muhammad Awais Yaseen
 * Author URI:        https://wordpress.org/
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      5.6
 */

 remove_filter('the_excerpt', 'wpautop');
//  remove_filter('the_content', 'wpautop');

 function remove_newlines( $content ) {
    $content = str_replace( "\n", "", $content );
    return $content;
}
add_filter( 'the_content', 'remove_newlines' );

function remove_tabs( $content ) {
    $content = str_replace( "\t", "", $content );
    return $content;
}
add_filter( 'the_content', 'remove_tabs' );

function remove_p_tags( $content ) {
    $pattern = '/<p>(.*?)<\/p>/s'; // Regular expression pattern to match <p> tags
    $content = preg_replace( $pattern, '$1', $content ); // Replace <p> tags with their contents
    return $content;
}
add_filter( 'the_content', 'remove_p_tags' );

//  for featured image add in respose 
function iwsGetFeaturedImgSrc($obj, $fieldName, $request) {
    if ($obj['featured_media']) {
        $img = wp_get_attachment_image_src($obj['featured_media'], 'full');
        return $img[0];
    }
    return false;
}



add_action('rest_api_init', function() {
    register_rest_field('post', 'featured_src', [
        'get_callback' => 'iwsGetFeaturedImgSrc',
    ]);
});