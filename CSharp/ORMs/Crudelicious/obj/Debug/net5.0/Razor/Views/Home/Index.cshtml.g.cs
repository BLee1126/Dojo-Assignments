#pragma checksum "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "08d1a6da431517fa031977aac0ccc0b4b06dd00a"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\_ViewImports.cshtml"
using Crudelicious;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\_ViewImports.cshtml"
using Crudelicious.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"08d1a6da431517fa031977aac0ccc0b4b06dd00a", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"64c0db40c4c91a29aacfb134c187d6cf7f912d39", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"<div>
    <h1>Welcome to CRUDelicious</h1>
</div>
<div>
    <h4>Check out some recent dishes!</h4>
    <a href=""/form"">Add a Dish</a>
</div>
<div>
    <table class=""table table-dark table-hover"">
        <tr>
            <th>Dish ID</th>
            <th>Name</th>
            <th>Chef Name</th>
            <th>Calories</th>
            <th>Tastiness</th>
            <th>Description</th>
            <th>Actions</th>
        </tr>

");
#nullable restore
#line 20 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
         foreach(Dish dish in ViewBag.AllDishes)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("            <tr>\r\n                <td>");
#nullable restore
#line 23 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
               Write(dish.DishId);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td><a");
            BeginWriteAttribute("href", " href=\"", 592, "\"", 619, 2);
            WriteAttributeValue("", 599, "/Dishes/", 599, 8, true);
#nullable restore
#line 24 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
WriteAttributeValue("", 607, dish.DishId, 607, 12, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 24 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
                                              Write(dish.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></td>\r\n                <td>");
#nullable restore
#line 25 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
               Write(dish.ChefName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td>");
#nullable restore
#line 26 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
               Write(dish.Calories);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td>");
#nullable restore
#line 27 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
               Write(dish.Tastiness);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td>");
#nullable restore
#line 28 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
               Write(dish.Description);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                <td><a");
            BeginWriteAttribute("href", " href=\"", 832, "\"", 864, 3);
            WriteAttributeValue("", 839, "/Dishes/", 839, 8, true);
#nullable restore
#line 29 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
WriteAttributeValue("", 847, dish.DishId, 847, 12, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 859, "/edit", 859, 5, true);
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-sm btn-info\">Edit</a> <a");
            BeginWriteAttribute("href", " href=\"", 905, "\"", 939, 3);
            WriteAttributeValue("", 912, "/Dishes/", 912, 8, true);
#nullable restore
#line 29 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
WriteAttributeValue("", 920, dish.DishId, 920, 12, false);

#line default
#line hidden
#nullable disable
            WriteAttributeValue("", 932, "/delete", 932, 7, true);
            EndWriteAttribute();
            WriteLiteral(" class=\"btn btn-sm btn-danger\">Delete</a></td>\r\n            </tr>\r\n");
#nullable restore
#line 31 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\ORMs\crudelicious\Views\Home\Index.cshtml"
        }

#line default
#line hidden
#nullable disable
            WriteLiteral("    </table>\r\n</div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
