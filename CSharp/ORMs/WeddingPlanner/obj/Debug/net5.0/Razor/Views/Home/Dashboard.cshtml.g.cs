#pragma checksum "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8b44116743f46580eb9573720727855c9270d660"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Dashboard), @"mvc.1.0.view", @"/Views/Home/Dashboard.cshtml")]
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
#line 1 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\_ViewImports.cshtml"
using WeddingPlanner;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\_ViewImports.cshtml"
using WeddingPlanner.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8b44116743f46580eb9573720727855c9270d660", @"/Views/Home/Dashboard.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9e9e38482b8beecdb199b7be73dfa5c3d6a2f574", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Dashboard : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"<div>
    <h1>Plan your Wedding</h1>
    <div>
        <a href=""/logout"">Logout</a>
    </div>
</div>
<div>
    <table class=""table table-dark table-hover"">    
        <tr>
            <th>Wedding</th>
            <th>Date</th>
            <th>Guest</th>
            <th>Action</th>
        </tr>
");
#nullable restore
#line 15 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
         foreach(Wedding wedding in ViewBag.Weddings)
        {

#line default
#line hidden
#nullable disable
            WriteLiteral("            <tr>\r\n                <td><a");
            BeginWriteAttribute("href", " href=\"", 418, "\"", 453, 2);
            WriteAttributeValue("", 425, "/weddings/", 425, 10, true);
#nullable restore
#line 18 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 435, wedding.WeddingId, 435, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 18 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                                                      Write(wedding.Wedder1);

#line default
#line hidden
#nullable disable
            WriteLiteral(" & ");
#nullable restore
#line 18 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                                                                         Write(wedding.Wedder2);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></td>\r\n                <td>");
#nullable restore
#line 19 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
               Write(wedding.Date.ToString("MM/dd/yyyy"));

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 20 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                 if(wedding.Rsvp != null){

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <td>");
#nullable restore
#line 21 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                   Write(wedding.Rsvp.Count);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n");
#nullable restore
#line 22 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                }
                else{

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <td>0</td>\r\n");
#nullable restore
#line 25 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                }  

#line default
#line hidden
#nullable disable
#nullable restore
#line 26 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                 if(wedding.CreatorId == ViewBag.UserId)
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <td><a");
            BeginWriteAttribute("href", " href=\"", 856, "\"", 898, 2);
            WriteAttributeValue("", 863, "/weddings/delete/", 863, 17, true);
#nullable restore
#line 28 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 880, wedding.WeddingId, 880, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Delete</a></td>\r\n");
#nullable restore
#line 29 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                }

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n");
#nullable restore
#line 31 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                 if (wedding.Rsvp.Any(rsvp => rsvp.UserId == @ViewBag.UserId))
                {

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <td><a");
            BeginWriteAttribute("href", " href=\"", 1063, "\"", 1101, 2);
            WriteAttributeValue("", 1070, "/rsvp/delete/", 1070, 13, true);
#nullable restore
#line 33 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 1083, wedding.WeddingId, 1083, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">Un-RSVP</a></td>\r\n");
#nullable restore
#line 34 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                }
                else{

#line default
#line hidden
#nullable disable
            WriteLiteral("                    <td><a");
            BeginWriteAttribute("href", " href=\"", 1189, "\"", 1224, 2);
            WriteAttributeValue("", 1196, "/rsvp/add/", 1196, 10, true);
#nullable restore
#line 36 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
WriteAttributeValue("", 1206, wedding.WeddingId, 1206, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">RSVP</a></td>\r\n");
#nullable restore
#line 37 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
                }

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n            </tr>\r\n");
#nullable restore
#line 40 "C:\Users\blee1\Desktop\Dojo Assignments\CSharp\ORMs\WeddingPlanner\Views\Home\Dashboard.cshtml"
        }

#line default
#line hidden
#nullable disable
            WriteLiteral("    </table>    \r\n</div>\r\n<a href=\"/weddingform\" btn btn-lg btn-success>New Wedding!</a>\r\n");
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
