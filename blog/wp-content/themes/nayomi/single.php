<?php get_header(); ?>

	<div id="blog">
		<div id="content">
			<?php
				// Start the Loop.
				while ( have_posts() ) : the_post();


					get_template_part( 'content', get_post_format() );

					// Previous/next post navigation.
					//twentyfourteen_post_nav();

					// If comments are open or we have at least one comment, load up the comment template.
					/*if ( comments_open() || get_comments_number() ) {
						comments_template();
					}
				endwhile;*/
			?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
?>