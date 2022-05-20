# React Router

First created in 2014, React Router is a declarative, component based, client and server-side routing library for React. Just as React gives you a declarative and composable API for adding to and updating application state, React Router gives you a declarative and composable API for adding to and updating the user's navigation history.

## <BrowserRouter>

Under the hood, BrowserRouter uses both the history library as well as React Context.

- The history library helps React Router keep track of the browsing history of the application using the browser's built-in history stack
- React Context helps make history available wherever React Router needs it.

The mechanism's for accessing the Context created by BrowserRouter include:

- useNavigate
- useLocation
- useParams
  etc.

## <Routes>

You can think of Routes as the metaphorical conductor (or a switch statement that operates on the paths) of your routes. Whenever you have one or more Routes, you'll most likely want to wrap them in a Routes.

## <Route>

Route is the component used primarily to map a component to a path within your application.
These can be nested in a way that can serve as a visual metaphor of the path tree of your app, as well as be used to wrap different groups of routes with a shared layout and/or relative paths.

## <Navigate>

Navigate is a declarative wrapper for useNavigate, that re-routes to a new route within a components render call. It can be very useful for things like Authenticated routes, where redirect behavior is part of the render logic (rather than necessitating useEffect or other manual hooks). Importantly can take a replace prop which will replace rather than push the redirected-from path in the history stack.

## <Link>

At its most basic, Link is an <a> tag that is built with React Router navigation. It can optionally tale things like state and query strings.

Note: you can even pass props to the Link'd component using the `state` prop, for example:

<Link to="/products" state={{ isLoggedIn: true }} />

---

## Nesting Routes

Nesting routes can be very useful:

- When multiple routes share the same relative path (for example, /products for an index page, /products/:productId for a show page, /products/:productId/edit for an edit page, etc.)
- When multiple routes share the same visual layout

If the first case is true but not the second you can compose the parent route to have the relative path prefix, but no element, like this:
<Route path="products">
<Route index element={<Index />} />
<Route path=":productId" element={<Show />} />
</Route>

In this example, the Index page takes an 'index' prop, to tell React Router that at the base/default level of the parent Route, render the '<Index>' element. In this example, there is no UI Layout that is shared.

If you want to share some Layout, you can do so by passing the parent route the Layout component:
<Route path="products" element={<Layout />}>
<Route index element={<Index />} />
<Route path=":productId" element={<Show />} />
</Route>
for this to work, you will need to add an <Outlet/> within Layout:

const Layout = () => {
return (
<>
<nav>...</nav>
<Outlet />
</>
)
}

## Outlet

Outlet is React Router's way of inserting children, where children are specifically a Route component.

---

## Hooks

### useNavigate

This is an imperative way to navigate in React Router. You simply pass the function accessible from useNavigate the route that you want to navigate to (relative to the basepath).

const navigate = useNavigate();
...
navigate('/home')

### useParams

When you are defining your routes, you can indicate that there is a url parameter with this notation:
<Route path="basepath/domain/:objectId"> element={<Element />} />

This informs ReactRouter that objectId is a url parameter and gives you access to it via the useParams hook within your components in this way:
const { objectId } = useParams()

### useSearchParams

This hook gives access to the search parameters in the URL:
const [searchParams, setSearchParams] = useSearchParams();

They can then be accessed by their name:
const q = searchParams.get('q')
const src = searchParams.get('src')
const f = searchParams.get('f')

## Code Splitting with React Lazy

In a large app with lots of code specific to different routes, React.lazy makes in coordination with React Router makes it very easy to load Route-specific code only when it is accessed by the user:

const Home = React.lazy(() => import("./Home"));
const Index = React.lazy(() => import("./Index"));
const Show = React.lazy(() => import("./Show"));

To make a smooth User experience, we use React Suspense API to show a loading page (the `fallback` prop) layout for each of the routes as the code is being loaded:

<React.Suspense fallback={<LoadingPage/>}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/index" element={<Index />} />
<Route path="/show" element={<Show />} />
</Routes>
</React.Suspense>
