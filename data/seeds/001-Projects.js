exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {id:1, name: "Office Supplies", description: "Office supply run", complete:true},
        {id:2, name: "Meeting", description: "Weekly Meetings", complete:false},
        {id:3, name: "Delivery", description: "Gifts for Customers", complete:false},
        {id:4, name: "Website", description: "Renovate Website", complete:true},
        {id:5, name: "Annual Budget", description: "Completing the Annual Budget", complete:true}
      ]);
    })
    .then(() => knex('resources').truncate())
    .then(function () {
      return knex('resources').insert([
        {id:1, name: "Computer", description: "Desktop"},
        {id:2, name: "Laptop", description: "Remote Work"},
        {id:3, name: "Printer", description: "to print out materials"},
        {id:4, name: "Conference Room", description: "Reserve for meetings"},
        {id:5, name: "Delivery Service", description: "delivery to clients or inhouse"},
        {id:6, name: "Projector", description: "for presentations"},
        {id:7, name: "Copier Paper", description: "to present or print materials on"},
        {id:8, name: "Food", description: "for meetings"},
        {id:9, name: "Receptionist", description: "to help complete tasks"}
      ]);
    })
    .then(() => knex('project_resource').truncate())
    .then(function () {
      return knex('project_resource').insert([
        {project_id:1, resource_id:1},
        {project_id:1, resource_id:5},
        {project_id:1, resource_id:9},
        {project_id:2, resource_id:1},
        {project_id:2, resource_id:3},
        {project_id:2, resource_id:4},
        {project_id:2, resource_id:6},
        {project_id:2, resource_id:8},
        {project_id:2, resource_id:9},
        {project_id:3, resource_id:1},
        {project_id:3, resource_id:5},
        {project_id:3, resource_id:9},
        {project_id:4, resource_id:1},
        {project_id:4, resource_id:2},
        {project_id:4, resource_id:4},
        {project_id:4, resource_id:6},
        {project_id:5, resource_id:1},
        {project_id:5, resource_id:3},
        {project_id:5, resource_id:7},
        {project_id:5, resource_id:4},
        {project_id:5, resource_id:6}
      ]);
    })
    .then(() => knex('tasks').truncate())
    .then(function () {
      return knex('tasks').insert([
        {id:1, description:"make a list", notes: "list all depleted supplies", complete:"false", project_id:1 },
        {id:2, description:"go to online supply store", notes: "Use Staples", complete:"false", project_id:1 },
        {id:3, description:"order all items on list", notes: "keep order information", complete:"false", project_id:1 },
        {id:4, description:"check off items", notes: "use order information to check off received items", complete:"false", project_id:1 },
        {id:5, description:"schedule meeting", notes: "use calendly to invite employees", complete:"false", project_id:2 },
        {id:6, description:"book conference room", notes: "have receptionist do it", complete:"false", project_id:2 },
        {id:7, description:"order food ", notes: "food will make employees enthusiastic nothing too messy", complete:"false", project_id:2 },
        {id:8, description:"reserve projector", notes: "presenter needs projector", complete:"false", project_id:2 },
        {id:9, description:"note taking for recap email", notes: "have receptionist take notes", complete:"false", project_id:2 },
        {id:10, description:"meeting recap email", notes: "have receptionist take send out emails", complete:"false", project_id:2 },
        {id:11, description:"buy goodies", notes: " online or from store", complete:"false", project_id:3 },
        {id:12, description:"make basket", notes: "have receptionist make gift baskets", complete:"false", project_id:3 },
        {id:13, description:"compose client list", notes: "get a list of clients who will be receiving baskets", complete:"false", project_id:3 },
        {id:14, description:"send out baskets", notes: "have courier deliver baskets", complete:"false", project_id:3 },
        {id:15, description:"sketches", notes: "variation sketches", complete:"false", project_id:4 },
        {id:16, description:"mock-ups", notes: "chosen design", complete:"false", project_id:4 },
        {id:17, description:"1st-render", notes: "full render of website", complete:"false", project_id:4 },
        {id:18, description:"re-render", notes: "re render with requested changes", complete:"false", project_id:4 },
        {id:19, description:"final product", notes: "complete website presentation", complete:"false", project_id:4 },
        {id:20, description:"annual report", notes: "accountants will put together our annual report", complete:"false", project_id:5 },
        {id:21, description:"set up annual report meeting", notes: "via calendly", complete:"false", project_id:5 },
        {id:22, description:"order food for meeting", notes: "ask receptionist", complete:"false", project_id:5 },
        {id:23, description:"annual report meeting", notes: "will discuss with accountants our ups and downs over the year", complete:"false", project_id:5 },
        {id:24, description:"annual report presentation", notes: "will discuss present our FY budget book to our stockholders and present our plans for the future of the company", complete:"false", project_id:5 }
      ]);
    });
};

