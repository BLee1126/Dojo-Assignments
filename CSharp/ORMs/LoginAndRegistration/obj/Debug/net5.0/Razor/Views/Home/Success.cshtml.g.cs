#pragma checksum "C:\Users\blee1\desktop\Dojo Assignments\CSharp\orms\LoginAndRegistration\Views\Home\Success.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e8a5c46e6e496d075d353159984a420ec2265c1f"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Success), @"mvc.1.0.view", @"/Views/Home/Success.cshtml")]
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
#line 1 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\orms\LoginAndRegistration\Views\_ViewImports.cshtml"
using LoginAndRegistration;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\orms\LoginAndRegistration\Views\_ViewImports.cshtml"
using LoginAndRegistration.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e8a5c46e6e496d075d353159984a420ec2265c1f", @"/Views/Home/Success.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"964b6e152f85f163ee6ab974ee42195b9d0de2ac", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Success : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<h1><marquee scrollamount=\"12\">Yay, success! Welcome ");
#nullable restore
#line 1 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\orms\LoginAndRegistration\Views\Home\Success.cshtml"
                                                Write(ViewBag.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 1 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\orms\LoginAndRegistration\Views\Home\Success.cshtml"
                                                                   Write(ViewBag.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" whose email is: ");
#nullable restore
#line 1 "C:\Users\blee1\desktop\Dojo Assignments\CSharp\orms\LoginAndRegistration\Views\Home\Success.cshtml"
                                                                                                     Write(ViewBag.Email);

#line default
#line hidden
#nullable disable
            WriteLiteral("</marquee></h1>");
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
