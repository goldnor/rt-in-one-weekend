// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="chapters/disclaimer.html">Disclaimer</a></li><li class="chapter-item expanded affix "><a href="chapters/cover.html">Cover</a></li><li class="chapter-item expanded "><a href="chapters/overview.html"><strong aria-hidden="true">1.</strong> Overview</a></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Output an Image</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/output_an_image/the_ppm_image_format.html"><strong aria-hidden="true">2.1.</strong> The PPM Image Format</a></li><li class="chapter-item expanded "><a href="chapters/output_an_image/creating_an_image_file.html"><strong aria-hidden="true">2.2.</strong> Creating an Image File</a></li><li class="chapter-item expanded "><a href="chapters/output_an_image/adding_a_progress_indicator.html"><strong aria-hidden="true">2.3.</strong> Adding a Progress Indicator</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/the_vec3_class/the_vec3_class.html"><strong aria-hidden="true">3.</strong> The vec3 class</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/the_vec3_class/color_utility_functions.html"><strong aria-hidden="true">3.1.</strong> Color Utility Functions</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">4.</strong> Rays, a Simple Camera, and Background</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/rays_a_simple_camera_and_background/the_ray_class.html"><strong aria-hidden="true">4.1.</strong> The ray class</a></li><li class="chapter-item expanded "><a href="chapters/rays_a_simple_camera_and_background/sending_rays_into_the_scene.html"><strong aria-hidden="true">4.2.</strong> Sending Rays Into the Scene</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/adding_a_sphere/adding_a_sphere.html"><strong aria-hidden="true">5.</strong> Adding a Sphere</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/adding_a_sphere/ray_sphere_intersection.html"><strong aria-hidden="true">5.1.</strong> Ray-Sphere Intersection</a></li><li class="chapter-item expanded "><a href="chapters/adding_a_sphere/creating_our_first_raytraced_image.html"><strong aria-hidden="true">5.2.</strong> Creating Our First Raytraced Image</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">6.</strong> Surface Normals and Multiple Objects</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/shading_with_surface_normals.html"><strong aria-hidden="true">6.1.</strong> Shading with Surface Normals</a></li><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/simplifying_the_ray_sphere_intersection_code.html"><strong aria-hidden="true">6.2.</strong> Simplifying the Ray-Sphere Intersection Code</a></li><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/an_abstraction_for_hittable_objects.html"><strong aria-hidden="true">6.3.</strong> An Abstraction of Hittable Objects</a></li><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/front_faces_versus_back_faces.html"><strong aria-hidden="true">6.4.</strong> Front Faces Versus Back Faces</a></li><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/a_list_of_hittable_objects.html"><strong aria-hidden="true">6.5.</strong> A List of Hittable Objects</a></li><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/some_new_cpp_features.html"><strong aria-hidden="true">6.6.</strong> Some New C++ Features</a></li><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/common_constants_and_utility_functions.html"><strong aria-hidden="true">6.7.</strong> Common Constants and Utility Functions</a></li><li class="chapter-item expanded "><a href="chapters/surface_normals_and_multiple_objects/an_interval_class.html"><strong aria-hidden="true">6.8.</strong> An Interval Class</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/moving_camera_code_into_its_own_class.html"><strong aria-hidden="true">7.</strong> Moving Camera Code Into Its Own Class</a></li><li class="chapter-item expanded "><a href="chapters/antialiasing/antialiasing.html"><strong aria-hidden="true">8.</strong> Antialiasing</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/antialiasing/some_random_number_utilities.html"><strong aria-hidden="true">8.1.</strong> Some Random Number Utilities</a></li><li class="chapter-item expanded "><a href="chapters/antialiasing/generating_pixels_with_multiple_samples.html"><strong aria-hidden="true">8.2.</strong> Generating Pixels with Multiple Samples</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/diffuse_materials/diffuse_materials.html"><strong aria-hidden="true">9.</strong> Diffuse Materials</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/diffuse_materials/a_simple_diffuse_material.html"><strong aria-hidden="true">9.1.</strong> A Simple Diffuse Material</a></li><li class="chapter-item expanded "><a href="chapters/diffuse_materials/limiting_the_number_of_child_rays.html"><strong aria-hidden="true">9.2.</strong> Limiting the Number of Child Rays</a></li><li class="chapter-item expanded "><a href="chapters/diffuse_materials/fixing_shadow_acne.html"><strong aria-hidden="true">9.3.</strong> Fixing Shadow Acne</a></li><li class="chapter-item expanded "><a href="chapters/diffuse_materials/true_lambertian_reflection.html"><strong aria-hidden="true">9.4.</strong> True Lambertian Reflection</a></li><li class="chapter-item expanded "><a href="chapters/diffuse_materials/using_gamma_correction_for_accurate_color_intensity.html"><strong aria-hidden="true">9.5.</strong> Using Gamma Correction for Accurate Color Intensity</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">10.</strong> Metal</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/metal/an_abstract_class_for_materials.html"><strong aria-hidden="true">10.1.</strong> An Abstract Class for Materials</a></li><li class="chapter-item expanded "><a href="chapters/metal/a_data_structure_to_describe_ray_object_intersections.html"><strong aria-hidden="true">10.2.</strong> A Data Structure to Describe Ray-Object Intersections</a></li><li class="chapter-item expanded "><a href="chapters/metal/modeling_light_scatter_and_reflectance.html"><strong aria-hidden="true">10.3.</strong> Modeling Light Scatter and Reflectance</a></li><li class="chapter-item expanded "><a href="chapters/metal/mirrored_light_reflection.html"><strong aria-hidden="true">10.4.</strong> Mirrored Light Reflection</a></li><li class="chapter-item expanded "><a href="chapters/metal/a_scene_with_metal_spheres.html"><strong aria-hidden="true">10.5.</strong> A Scene with Metal Spheres</a></li><li class="chapter-item expanded "><a href="chapters/metal/fuzzy_reflection.html"><strong aria-hidden="true">10.6.</strong> Fuzzy Reflection</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/dielectrics/dielectrics.html"><strong aria-hidden="true">11.</strong> Dielectrics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/dielectrics/refraction.html"><strong aria-hidden="true">11.1.</strong> Refraction</a></li><li class="chapter-item expanded "><a href="chapters/dielectrics/snells_law.html"><strong aria-hidden="true">11.2.</strong> Snell&#39;s Law</a></li><li class="chapter-item expanded "><a href="chapters/dielectrics/total_internal_reflection.html"><strong aria-hidden="true">11.3.</strong> Total Internal Reflection</a></li><li class="chapter-item expanded "><a href="chapters/dielectrics/schlick_approximation.html"><strong aria-hidden="true">11.4.</strong> Schlick Approximation</a></li><li class="chapter-item expanded "><a href="chapters/dielectrics/modeling_a_hollow_glass_sphere.html"><strong aria-hidden="true">11.5.</strong> Modeling a Hollow Glass Sphere</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/positionable_camera/positionable_camera.html"><strong aria-hidden="true">12.</strong> Positionable Camera</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/positionable_camera/camera_viewing_geometry.html"><strong aria-hidden="true">12.1.</strong> Camera Viewing Geometry</a></li><li class="chapter-item expanded "><a href="chapters/positionable_camera/positioning_and_orienting_the_camera.html"><strong aria-hidden="true">12.2.</strong> Positioning and Orienting the Camera</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/defocus_blur/defocus_blur.html"><strong aria-hidden="true">13.</strong> Defocus Blur</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/defocus_blur/a_thin_lens_approximation.html"><strong aria-hidden="true">13.1.</strong> A Thin Lens Approximation</a></li><li class="chapter-item expanded "><a href="chapters/defocus_blur/generating_sample_rays.html"><strong aria-hidden="true">13.2.</strong> Generating Sample Rays</a></li></ol></li><li class="chapter-item expanded "><div><strong aria-hidden="true">14.</strong> Where Next?</div></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/where_next/a_final_render.html"><strong aria-hidden="true">14.1.</strong> A Final Render</a></li><li class="chapter-item expanded "><a href="chapters/where_next/next_steps.html"><strong aria-hidden="true">14.2.</strong> Next Steps</a></li></ol></li><li class="chapter-item expanded "><a href="chapters/acknowledgments.html"><strong aria-hidden="true">15.</strong> Acknowledgments</a></li><li class="chapter-item expanded "><a href="chapters/citing_this_book/citing_this_book.html"><strong aria-hidden="true">16.</strong> Citing This Book</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapters/citing_this_book/basic_data.html"><strong aria-hidden="true">16.1.</strong> Basic Data</a></li><li class="chapter-item expanded "><a href="chapters/citing_this_book/snippets.html"><strong aria-hidden="true">16.2.</strong> Snippets</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
