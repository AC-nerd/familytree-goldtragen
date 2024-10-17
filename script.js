// Sample family data
const familyData = [
    { id: 1, name: "John Doe", age: 45, link: "#", parent: null }, // Root node
    { id: 2, name: "Jane Doe", age: 43, link: "#", parent: 1 },   // Child of John
    { id: 3, name: "Sam Doe", age: 20, link: "#", parent: 1 },    // Child of John
    { id: 4, name: "Sara Doe", age: 18, link: "#", parent: 1 },   // Child of John
    { id: 5, name: "Tom Doe", age: 22, link: "#", parent: 2 },     // Child of Jane
];

// Create family tree structure
const familyTreeData = familyData.map(member => ({
    id: member.id,
    parent: member.parent,
    text: {
        name: member.name,
        title: `Age: ${member.age}`,
        link: member.link
    },
    image: "https://via.placeholder.com/80" // Placeholder image
}));

// Initialize FamilyTree
const familyTree = new FamilyTree(document.getElementById("family-tree"), {
    data: familyTreeData,
    nodeTemplate: "<div style='text-align: center;'><img src='{{image}}' style='border-radius: 50%; width: 80px; height: 80px;'><br><strong>{{name}}</strong><br><small>{{title}}</small></div>",
    edit: false,
    zoomable: true,
});

// Event listener for clicking on a member
familyTree.onNodeClick = function(node) {
    document.getElementById("member-name").innerText = node.data.text.name;
    document.getElementById("member-age").innerText = `Age: ${node.data.text.title.replace("Age: ", "")}`;
    document.getElementById("member-link").href = node.data.text.link;
    document.getElementById("member-details").classList.remove("hidden");
};

// Close button functionality
document.getElementById("close-btn").onclick = function() {
    document.getElementById("member-details").classList.add("hidden");
};

// Initialize tree rendering
familyTree.update();
