// Mobile Responsiveness Testing Script
// Run this in your browser console to test mobile features

console.log('🧪 DashPro Mobile Testing Script');
console.log('================================');

// Test viewport and device detection
function testViewport() {
  console.log('📱 Viewport Information:');
  console.log(`- Width: ${window.innerWidth}px`);
  console.log(`- Height: ${window.innerHeight}px`);
  console.log(`- Device Pixel Ratio: ${window.devicePixelRatio}`);
  console.log(`- User Agent: ${navigator.userAgent}`);
  
  // Check if mobile
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log(`- Is Mobile: ${isMobile}`);
  
  // Check orientation
  const orientation = window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait';
  console.log(`- Orientation: ${orientation}`);
}

// Test responsive breakpoints
function testBreakpoints() {
  console.log('\n📐 Breakpoint Testing:');
  
  const width = window.innerWidth;
  let breakpoint = '';
  
  if (width < 481) breakpoint = 'XS (Mobile Small)';
  else if (width < 769) breakpoint = 'SM (Mobile Large)';
  else if (width < 1025) breakpoint = 'MD (Tablet)';
  else if (width < 1201) breakpoint = 'LG (Desktop Small)';
  else breakpoint = 'XL (Desktop Large)';
  
  console.log(`- Current Breakpoint: ${breakpoint}`);
  console.log(`- Screen Width: ${width}px`);
  
  // Test CSS classes
  const body = document.body;
  const hasMobileClass = body.classList.contains('mobile-device');
  console.log(`- Mobile Device Class: ${hasMobileClass}`);
}

// Test touch targets
function testTouchTargets() {
  console.log('\n👆 Touch Target Testing:');
  
  const buttons = document.querySelectorAll('button, a, input, select, textarea');
  let validTargets = 0;
  let invalidTargets = 0;
  
  buttons.forEach(button => {
    const rect = button.getBoundingClientRect();
    const minSize = 44;
    
    if (rect.width >= minSize && rect.height >= minSize) {
      validTargets++;
    } else {
      invalidTargets++;
      console.log(`  ❌ Small touch target: ${button.tagName} (${rect.width}x${rect.height}px)`);
    }
  });
  
  console.log(`- Valid Touch Targets (44px+): ${validTargets}`);
  console.log(`- Invalid Touch Targets (<44px): ${invalidTargets}`);
  console.log(`- Total Interactive Elements: ${buttons.length}`);
}

// Test responsive layout
function testResponsiveLayout() {
  console.log('\n🎨 Responsive Layout Testing:');
  
  // Check sidebar
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) {
    const sidebarRect = sidebar.getBoundingClientRect();
    const isVisible = sidebarRect.width > 0;
    console.log(`- Sidebar Visible: ${isVisible}`);
    console.log(`- Sidebar Width: ${sidebarRect.width}px`);
  }
  
  // Check main content
  const main = document.querySelector('.mobile-main');
  if (main) {
    const mainRect = main.getBoundingClientRect();
    console.log(`- Main Content Width: ${mainRect.width}px`);
    console.log(`- Main Content Left: ${mainRect.left}px`);
  }
  
  // Check grid layouts
  const grids = document.querySelectorAll('.mobile-metrics, .mobile-charts, .mobile-layout');
  grids.forEach((grid, index) => {
    const computedStyle = window.getComputedStyle(grid);
    const gridTemplateColumns = computedStyle.gridTemplateColumns;
    console.log(`- Grid ${index + 1} Columns: ${gridTemplateColumns}`);
  });
}

// Test performance
function testPerformance() {
  console.log('\n⚡ Performance Testing:');
  
  // Check if service worker is registered
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      console.log(`- Service Workers: ${registrations.length}`);
    });
  } else {
    console.log('- Service Workers: Not Supported');
  }
  
  // Check for PWA manifest
  const manifest = document.querySelector('link[rel="manifest"]');
  console.log(`- PWA Manifest: ${manifest ? 'Found' : 'Not Found'}`);
  
  // Check for critical CSS
  const criticalCSS = document.querySelector('style');
  console.log(`- Critical CSS: ${criticalCSS ? 'Found' : 'Not Found'}`);
}

// Test accessibility
function testAccessibility() {
  console.log('\n♿ Accessibility Testing:');
  
  // Check for proper heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  console.log(`- Total Headings: ${headings.length}`);
  
  // Check for ARIA labels
  const ariaElements = document.querySelectorAll('[aria-label], [aria-labelledby], [role]');
  console.log(`- ARIA Elements: ${ariaElements.length}`);
  
  // Check for focus styles
  const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]');
  console.log(`- Focusable Elements: ${focusableElements.length}`);
}

// Run all tests
function runAllTests() {
  console.log('🚀 Starting Mobile Responsiveness Tests...\n');
  
  testViewport();
  testBreakpoints();
  testTouchTargets();
  testResponsiveLayout();
  testPerformance();
  testAccessibility();
  
  console.log('\n✅ Testing Complete!');
  console.log('Check the results above for any issues.');
}

// Test on resize
function testOnResize() {
  console.log('\n🔄 Testing Responsive Behavior on Resize...');
  testViewport();
  testBreakpoints();
  testResponsiveLayout();
}

// Add resize listener
window.addEventListener('resize', testOnResize);

// Export functions for manual testing
window.mobileTest = {
  runAll: runAllTests,
  viewport: testViewport,
  breakpoints: testBreakpoints,
  touchTargets: testTouchTargets,
  layout: testResponsiveLayout,
  performance: testPerformance,
  accessibility: testAccessibility
};

console.log('📋 Available test functions:');
console.log('- mobileTest.runAll() - Run all tests');
console.log('- mobileTest.viewport() - Test viewport');
console.log('- mobileTest.breakpoints() - Test breakpoints');
console.log('- mobileTest.touchTargets() - Test touch targets');
console.log('- mobileTest.layout() - Test responsive layout');
console.log('- mobileTest.performance() - Test performance');
console.log('- mobileTest.accessibility() - Test accessibility');

// Auto-run tests after page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', runAllTests);
} else {
  runAllTests();
}
