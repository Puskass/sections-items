export const sections = [
  {
    id: generateUniqueId(),
    sectionName: "Coffee",
    sectionImage: 'https://images.pexels.com/photos/7362647/pexels-photo-7362647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: generateUniqueId(),
    sectionName: "Pizza",
    sectionImage: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: generateUniqueId(),
    sectionName: "Pasta",
    sectionImage: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  
  {
    id: generateUniqueId(),
    sectionName: "Desserts",
    sectionImage: "https://images.pexels.com/photos/3607026/pexels-photo-3607026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: generateUniqueId(),
    sectionName: "Milkshakes",
    sectionImage: "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
];

// Function to generate a random ID
function generateUniqueId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
