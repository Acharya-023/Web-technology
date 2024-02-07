// let aside=document.querySelector("h1")

// let table=document.createElement("table")

// let tr1=document.createElement("tr")
// let td1=document.createElement("td")
// let td2=document.createElement("td")
// let td3=document.createElement("td")
// let td4=document.createElement("td")

// td1.innerText="HOME |"
// td2.innerText="ABOUT |"
// td3.innerText="PRODUCTS |"
// td4.innerText="LOGIN "

// tr1.append(td1,td2,td3,td4)

// table.append(tr1)

// aside.append(table)

// table.style.border="2px solid black"
var view =document.querySelector(h1)
view.frame = CGRect(x: 0, y: 0, width: 1440, height: 1018)
view.layer.backgroundColor = UIColor(red: 0.2, green: 0.2, blue: 0.2, alpha: 1).cgColor

var parent = self.view!
parent.addSubview(view)
view.translatesAutoresizingMaskIntoConstraints = false
view.widthAnchor.constraint(equalToConstant: 1440).isActive = true
view.heightAnchor.constraint(equalToConstant: 1018).isActive = true
view.centerXAnchor.constraint(equalTo: parent.centerXAnchor, constant: 0).isActive = true
view.bottomAnchor.constraint(equalTo: parent.bottomAnchor, constant: 0).isActive = true
