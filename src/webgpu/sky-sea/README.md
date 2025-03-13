# WebGPU Sky and Sea

## Features

- Ocean
  - Gerstner waves, also known as trochoid waves
  - FFT acceleration for millions of waves instead of a few dozen
  - Gravity-waves with directional spreading and JONSWAP spectrum
  - Parameterized wind
  - Cascades that divide full frequency spectrum for more detail
  - Foam that forms and dissipates based on surface jacobian
  - Ocean surface mesh projected from screen-space to world-space
  - Rasterization into GBuffer with per vertex displacement and per fragment normals
- Atmosphere
  - Dynamic time of day
  - Raymarched scattering integral of directional light contribution
  - Atmosphere medium with Rayleigh, Mie, and Ozone scattering
  - Multiple scattering and aerial perspective
  - Composited sun-disk
  - Lookup tables for transmittance, view of the sky, multiscattering, and aerial perspective
- Ocean surface lighting sums contributions from sky-dome, direct sunlight, and underwater up-scattering
- Able to display most intermediate resources (such as the complex amplitudes of the ocean FFT spectrum) to the screen

## About

Work in progress

## Further Work

- Improve the tiling to make it aperiodic, see [[7]](#lutz-2024) for an option for the technique
- Better level-of-detail for the distant ocean
  - Currently displacement maps are sampled with mipmaps and anisotropic filtering, this still leads to instability when the camera moves due to the unstable vertex positions of the ocean surface mesh
  - The distant ocean needs to be modelled in a way that captures the variance of the slopes, potentially see the BRDF technique in [[3]](#bruneton-2010)
- The ocean surface needs a more realistic lighting model. It is currently lacking:
  - Light transmitting through waves
  - Secondary bounces
  - Refraction
  - Accurate estimation of the luminance from underwater
- More realistic foam and spray
  - Handle loops in wave crests
- Underwater camera
- Clouds
- Volumetric shadows
- Moon
- Smooth the sun-disk

## Citations

<a id="tessendorf-2001">[1]</a>
Jerry Tessendorf. 2001.
Simulating Ocean Water.
SIG-GRAPH'99 Course Note.
<https://jtessen.people.clemson.edu/reports/papers_files/coursenotes2002.pdf>

<a id="bruneton-2008">[2]</a>
Eric Bruneton, Fabrice Neyret. 2008.
Precomputed Atmospheric Scattering.
Computer Graphics Forum, Special Issue: Proceedings of the 19th Eurographics Symposium on Rendering 2008, 27(4), pp.1079-1086.
<https://doi.org/10.1111/j.1467-8659.2008.01245.x> . <https://inria.hal.science/inria-00288758>

<a id="bruneton-2010">[3]</a>
Eric Bruneton, Fabrice Neyret, Nicolas Holzschuch. 2010.
Real-time Realistic Ocean Lighting using Seamless Transitions from Geometry to BRDF.
Computer Graphics Forum, 29(2), pp. 487-496.
<https://doi.org/10.1111/j.1467-8659.2009.01618.x> . <https://inria.hal.science/inria-00443630v3>

<a id="flugge-2017">[4]</a>
Fynn-Jorin Flügge. 2017.
Realtime GPGPU FFT ocean water simulation.
<https://doi.org/10.15480/882.1436>

<a id="gamper-2018">[5]</a>
Thomas Gamper. 2018.
Ocean surface generation and rendering [Diploma Thesis, Technische Universität Wien].
reposiTUm.
<https://doi.org/10.34726/hss.2018.57880>

<a id="hillaire-2020">[6]</a>
Sébastien Hillaire. 2020.
A scalable and production ready sky and atmosphere rendering technique.
Computer Graphics Forum, 39(4), pp. 13–22.
<https://doi.org/10.1111/cgf.14050>

<a id="lutz-2024">[7]</a>
Nicolas Lutz, Arnaud Schoentgen, and Guillaume Gilet. 2024.
Fast orientable aperiodic ocean synthesis using tiling and blending.
Proc. ACM Comput. Graph. Interact. Tech. 7, 3, Article 49 (August 2024), 22 pages.
<https://doi.org/10.1145/3675388>
