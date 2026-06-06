let Place = 0
const content = document.getElementById("content")
content.style.display = "none"

function area(ID) {
    Place = ID
    Update()
}

let info = [
  "",
  "FUNCTIONS: A function is a rule that turns an input into an output. Written as f(x)=expression. x is the input and f(x) is the output. Example: f(x)=2x+3. To solve f(4): substitute x with 4 → f(4)=2(4)+3=8+3=11.",
  
  "SLOPE (GRADIENT): m=(y2-y1)/(x2-x1). Example: (1,4) and (5,16). m=(16-4)/(5-1)=12/4=3. Gradient = 3. EQUATION OF A LINE: y=mx+c. Substitute m=3 → y=3x+c. Use point (5,16): 16=3(5)+c → 16=15+c → c=1 → final equation y=3x+1.",

  "LENGTH OF DIAGONAL OF A RECTANGLE: d=√(l²+w²). Example: length=6, width=8. Step 1: Square length and width. 6²=36, 8²=64. Step 2: Add squares. 36+64=100. Step 3: Square root of sum. √100=10. Length of diagonal = 10.",

  "PYTHAGORAS: Used for right-angled triangles. Formula: a²+b²=c². Step 1: Label the longest side as c. Step 2: Substitute the known values. Example: a=5, c=13. 5²+b²=13². Step 3: Calculate squares. 25+b²=169. Step 4: Subtract 25 from both sides. b²=144. Step 5: Square root both sides. b=12.",

  "SURDS: A surd is a square root that is not a whole number, such as √2 or √5. To simplify a surd, find the largest square number that divides the number inside the root. Example: √72. Step 1: 72=36×2. Step 2: √72=√36×√2. Step 3: √36=6. Step 4: Answer = 6√2.",

  "CURVED GRAPHS: A curved graph changes gradient as x changes. Example: y=x². Step 1: Choose x values such as -2, -1, 0, 1, 2. Step 2: Calculate y for each value. Step 3: Plot the points. Step 4: Join them with a smooth curve, not straight lines.",

  "SIMPLIFYING EXPRESSIONS: Collect like terms. Example: 3x+5x-2x. Step 1: Find terms with the same variable. Step 2: Add or subtract the numbers. 3+5-2=6. Step 3: Answer = 6x. Example: 4a+a=5a. Example: 7y-3y=4y.",

  "Group into pairs (17.16) -> Find largest square for first pair (4 × 4 = 16) -> Subtract 17 - 16 = 1 -> Bring down 16 to make 116 -> Double current root (4 × 2 = 8) -> Find digit for 8_ × _ ≤ 116 (81 × 1 = 81) -> Write 1 at top -> Subtract 116 - 81 = 35 -> Bring down 00 to make 3500 -> Double current root (41 × 2 = 82) -> Find digit for 82_ × _ ≤ 3500 (824 × 4 = 3296) -> Write 4 at top -> Final approximate root is 4.14"
];


function Update() {
    content.style.display = "block"
    content.innerText = info[Place]
}
